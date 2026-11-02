$(document).ready(function() {
    // 1. Барлық 4 бөлме мен 21 қонақтың толық массиві
   const partyData = [
       {
            room: "Balcony", floor: 2,
            guests: [
                { name: "Aigerim", color: "green", time: "20:45", aitu: true, phone: false, glasses: false, bag: false, cup: true, crumbs: true },
                { name: "Aliya", color: "yellow", time: "21:15", aitu: false, phone: true, glasses: false, bag: false, cup: true, crumbs: false },
                { name: "Madina", color: "purple", time: "22:10", aitu: false, phone: true, glasses: false, bag: true, cup: false, crumbs: true },
                { name: "Ivan", color: "blue", time: "20:10", aitu: true, phone: false, glasses: false, bag: false, cup: true, crumbs: false }
            ]
        },
       {
            room: "Hall", floor: 2,
            guests: [
                { name: "Arman", color: "orange", time: "20:35", aitu: false, phone: false, glasses: true, bag: true, cup: false, crumbs: false },
                { name: "Sophia", color: "purple", time: "21:20", aitu: true, phone: true, glasses: false, bag: false, cup: false, crumbs: false },
                { name: "Dias", color: "grey", time: "19:45", aitu: true, phone: false, glasses: false, bag: false, cup: false, crumbs: false },
                { name: "Bekzat", color: "yellow", time: "20:55", aitu: false, phone: false, glasses: false, bag: true, cup: true, crumbs: true }, // phone: false жасалды
                { name: "Aruzhan", color: "blue", time: "21:50", aitu: true, phone: true, glasses: false, bag: false, cup: false, crumbs: false },
                { name: "Saule", color: "green", time: "21:25", aitu: false, phone: false, glasses: true, bag: false, cup: false, crumbs: false }
            ]
        },
      {
            room: "Kitchen", floor: 1,
            guests: [
                { name: "Nurlan", color: "red", time: "19:40", aitu: true, phone: true, glasses: false, bag: false, cup: false, crumbs: true }, // phone: true, ал cup: false жасалды
                { name: "Emma", color: "purple", time: "20:15", aitu: false, phone: false, glasses: false, bag: true, cup: false, crumbs: false },
                { name: "Timur", color: "blue", time: "21:05", aitu: true, phone: true, glasses: false, bag: true, cup: false, crumbs: true },
                { name: "Sergey", color: "yellow", time: "20:30", aitu: false, phone: false, glasses: false, bag: false, cup: false, crumbs: false },
                { name: "Yerlan", color: "orange", time: "21:40", aitu: true, phone: true, glasses: true, bag: false, cup: false, crumbs: false },
                { name: "Kamila", color: "black", time: "20:05", aitu: false, phone: false, glasses: false, bag: false, cup: true, crumbs: false }
            ]
        },
       {
            room: "Living room", floor: 1,
            guests: [
                { name: "Daniel", color: "blue", time: "19:55", aitu: true, phone: false, glasses: true, bag: false, cup: false, crumbs: false },
                { name: "Zarina", color: "green", time: "21:10", aitu: false, phone: true, glasses: false, bag: true, cup: false, crumbs: true },
                { name: "Natasha", color: "brown", time: "20:30", aitu: true, phone: false, glasses: false, bag: false, cup: false, crumbs: false },
                { name: "Askar", color: "blue", time: "21:00", aitu: true, phone: true, glasses: false, bag: false, cup: false, crumbs: false },
                { name: "Inkar", color: "purple", time: "20:20", aitu: false, phone: false, glasses: false, bag: true, cup: false, crumbs: false }
            ]
        }
    ];

    // 2. Бетті құру функциясы
    function buildPage() {
        partyData.forEach(roomObj => {
            const roomDiv = $(`.room[data-room="${roomObj.room}"] .guests-container`);
            roomDiv.empty();
            
            roomObj.guests.forEach(g => {
                let iconsHtml = '';
                if (g.phone) iconsHtml += '<span class="icon-badge">📱</span>';
                if (g.glasses) iconsHtml += '<span class="icon-badge">👓</span>';
                if (g.bag) iconsHtml += '<span class="icon-badge">🛍️</span>';
                if (g.cup) iconsHtml += '<span class="icon-badge">☕</span>';
                if (g.crumbs) iconsHtml += '<span class="icon-badge">🍰</span>';

                let aituHtml = g.aitu ? '<div class="aitu-badge">🎓</div>' : '';

                const card = $(`
                    <div class="guest-card" 
                         data-name="${g.name}" 
                         data-color="${g.color}" 
                         data-time="${g.time}" 
                         data-aitu="${g.aitu}"
                         data-phone="${g.phone}"
                         data-glasses="${g.glasses}"
                         data-bag="${g.bag}"
                         data-cup="${g.cup}"
                         data-crumbs="${g.crumbs}">
                        <div class="avatar-wrapper">
    <img src="https://api.dicebear.com/9.x/open-peeps/svg?seed=${g.name}" alt="${g.name}" style="border-color: ${g.color};">
    ${aituHtml} <!-- AITU значогы осы жерде шығады -->
</div>
                        <div class="guest-name">${g.name}</div>
                        <div class="guest-time">🕒 ${g.time}</div>
                        <div class="guest-icons">${iconsHtml}</div>
                    </div>
                `);
                roomDiv.append(card);
            });
        });
    }

    buildPage();

    // 3. 20 кейске арналған батырмалар тізімі
    const cases = [
        "1. Who is in the hall?",
        "2. Who is dressed in yellow or purple?",
        "3. Which AITU students are upstairs?",
        "4. Who has glasses or a bag?",
        "5. Who came with nothing at all?",
        "6. Who has a phone but no bag?",
        "7. Who arrived between 20:30 and 21:00, both times included?",
        "8. Who arrived after 21:00 and is not an AITU student?",
        "9. Who stands right next to Askar?",
        "10. Who stands last in each room?",
        "11. Who stands third in each room?",
        "12. Who stands after Timur in his room?",
        "13. Who stands right before someone in black?",
        "14. In which room is Aruzhan?",
        "15. Which rooms have fewer than 6 guests?",
        "16. In which rooms does somebody have a cup, but nobody wears glasses?",
        "17. Who came first to each room?",
        "18. Miras, an AITU student in blue, comes at 21:20 with his phone and joins Askar and Inkar.",
        "19. Natasha says goodbye and goes home.",
        "20. Who took the cake?"
    ];

    const $caseButtons = $('#case-buttons');
    cases.forEach((caseText, index) => {
        const btn = $(`<button>${caseText}</button>`);
        btn.click(function() {
            runCase(index + 1);
        });
        $caseButtons.append(btn);
    });

    // 4. Барлық 20 кейстің іздеу логикасы
    function runCase(caseNum) {
        buildPage();
        let $found = $();

        switch(caseNum) {
            case 1:
                $found = $('.room[data-room="Hall"] .guest-card');
                break;
            case 2:
                $found = $('.guest-card').filter(function() {
                    return $(this).attr('data-color') === 'yellow' || $(this).attr('data-color') === 'purple';
                });
                break;
            case 3:
                $found = $('.floor[data-floor="2"] .guest-card').filter(function() {
                    return $(this).attr('data-aitu') === 'true';
                });
                break;
            case 4:
                $found = $('.guest-card').filter(function() {
                    return $(this).attr('data-glasses') === 'true' || $(this).attr('data-bag') === 'true';
                });
                break;
            case 5:
                $found = $('.guest-card').filter(function() {
                    return $(this).attr('data-phone') === 'false' && 
                           $(this).attr('data-glasses') === 'false' && 
                           $(this).attr('data-bag') === 'false' && 
                           $(this).attr('data-cup') === 'false' && 
                           $(this).attr('data-crumbs') === 'false';
                });
                break;
            case 6:
                $found = $('.guest-card').filter(function() {
                    return $(this).attr('data-phone') === 'true' && $(this).attr('data-bag') === 'false';
                });
                break;
            case 7:
                $found = $('.guest-card').filter(function() {
                    const time = $(this).attr('data-time');
                    return time >= "20:30" && time <= "21:00";
                });
                break;
            case 8:
                $found = $('.guest-card').filter(function() {
                    return $(this).attr('data-time') > "21:00" && $(this).attr('data-aitu') === 'false';
                });
                break;
            case 9:
                $found = $('.guest-card[data-name="Askar"]').siblings();
                break;
            case 10:
                $found = $('.room').map(function() {
                    return $(this).find('.guest-card').last()[0];
                });
                break;
            case 11:
                $found = $('.room').map(function() {
                    return $(this).find('.guest-card').eq(2)[0];
                });
                break;
            case 12:
                $found = $('.guest-card[data-name="Timur"]').next();
                break;
            case 13:
                $found = $('.guest-card').filter(function() {
                    return $(this).next().attr('data-color') === 'black';
                });
                break;
           case 14:
                // 14. Аружан қай бөлмеде? (Аружан тұрған бөлмедегі барлық қонақтарды жарық қыламыз)
                $found = $('.guest-card[data-name="Aruzhan"]').closest('.room').find('.guest-card');
                break;
           case 15:
                // 15. Қай бөлмелерде 6 қонақтан аз адам бар? (Сол бөлмелердегі қонақтар)
                $found = $('.room').filter(function() {
                    return $(this).find('.guest-card').length < 6;
                }).find('.guest-card');
                break;
           case 16:
                // 16. Қай бөлмелерде чашка бар, бірақ көзілдірік жоқ? (Сол бөлмелердегі қонақтар)
                $found = $('.room').filter(function() {
                    const hasCup = $(this).find('.guest-card[data-cup="true"]').length > 0;
                    const hasGlasses = $(this).find('.guest-card[data-glasses="true"]').length > 0;
                    return hasCup && !hasGlasses;
                }).find('.guest-card');
                break;
            case 17:
                // 17. Әр бөлмеге бірінші болып кім келді?
                $found = $('.room').map(function() {
                    return $(this).find('.guest-card').first()[0];
                });
                break;
           case 18:
                // 18. Miras, an AITU student in blue, comes at 21:20 with his phone and joins Askar and Inkar, standing between them.
                let $existingMiras = $('.guest-card[data-name="Miras"]');
                
                if ($existingMiras.length === 0) {
                    const mirasCard = $(`
                        <div class="guest-card" data-name="Miras" data-color="blue" data-time="21:20" data-aitu="true" data-phone="true" data-glasses="false" data-bag="false" data-cup="false" data-crumbs="false">
                            <div class="avatar-wrapper">
                                <img src="https://api.dicebear.com/9.x/open-peeps/svg?seed=Miras" alt="Miras" style="border-color: blue;">
                                <div class="aitu-badge">🎓</div>
                            </div>
                            <div class="guest-name">Miras</div>
                            <div class="guest-time">🕒 21:20</div>
                            <div class="guest-icons"><span>📱</span></div>
                        </div>
                    `);
                    
                    // Асқар мен Инкардың қайсысы бірінші тұрғанын тексеріп, дәл арасына саламыз
                    const $askar = $('.guest-card[data-name="Askar"]');
                    const $inkar = $('.guest-card[data-name="Inkar"]');
                    
                    if ($askar.length && $inkar.length) {
                        // Асқар мен Инкар қатар тұрса, екеуінің ортасына қосамыз
                        // Инкар Асқардан кейін тұрса
                        if ($askar.next().attr('data-name') === 'Inkar') {
                            $askar.after(mirasCard);
                        } else {
                            $inkar.after(mirasCard);
                        }
                    } else if ($askar.length) {
                        $askar.after(mirasCard);
                    } else {
                        // Егер ешқайсысы табылмаса, Living room бөлмесіне апарып қосамыз
                        $('.room[data-room="Living room"] .guests-container').append(mirasCard);
                    }
                    
                    mirasCard.hide().fadeIn(500);
                    $found = mirasCard;
                } else {
                    $found = $existingMiras;
                }
                break;
            case 19:
                // Natasha кетеді
                $found = $('.guest-card[data-name="Natasha"]');
                $found.fadeOut(500, function() { $(this).remove(); });
                return;
            case 20:
                // Ұрыны табу (Nurlan немесе crumbs барлар)
                $found = $('.guest-card').filter(function() {
                    return $(this).attr('data-crumbs') === 'true' && $(this).attr('data-cup') === 'false';
                });
                break;
            default:
                $found = $();
        }

        // Spotlight эффектісі
        $('.guest-card').stop().fadeTo(300, 0.2);
        if ($found.length > 0) {
            $found.stop().fadeTo(300, 1.0);
            $found.each(function() {
                $(this).stop().animate({ top: '-10px' }, 150).animate({ top: '0px' }, 150);
            });
        }
    }

    $('#clear-btn').click(function() {
        buildPage();
        $('.guest-card').stop().fadeTo(300, 1.0);
    });

    // Модальды терезе логикасы
    $(document).on('click', '.guest-card', function() {
        const name = $(this).attr('data-name');
        const time = $(this).attr('data-time');
        const aitu = $(this).attr('data-aitu') === 'true' ? 'AITU student' : 'Not AITU student';
        
        $('.modal-body').html(`
            <img src="https://api.dicebear.com/9.x/open-peeps/svg?seed=${name}" width="60">
            <h3>${name}</h3>
            <p>Came at: ${time}</p>
            <p><b>${aitu}</b></p>
        `);
        $('#modal-card').fadeIn(300);
    });

    $('.close-btn, .modal').click(function(e) {
        if (e.target !== this && !$(e.target).hasClass('close-btn')) return;
        $('#modal-card').fadeOut(300);
    });

    $(document).keydown(function(e) {
        if (e.key === "Escape") {
            $('#modal-card').fadeOut(300);
        }
    });
});