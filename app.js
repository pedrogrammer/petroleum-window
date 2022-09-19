function sideNavTask() {
    var
        hamburgerBtn = document.querySelector('#hamburger-btn'),
        sideNavigation = document.querySelector('#side-navigation'),
        dropShadow = document.querySelector('#drop-shadow')
    ;

    function sideNavigationDisplay(percent) {
        sideNavigation.style.right = percent;
    }
    
    function dropShadowDisplay(status) {
        dropShadow.style.display = status;
    }
    
    function hamburgerBtnHandler() {
        sideNavigationDisplay("2%");
        dropShadowDisplay("block");
    }
    
    function dropShadowHandler() {
        sideNavigationDisplay("-50%");
        dropShadowDisplay("none");
    }
    
    hamburgerBtn.addEventListener('click', hamburgerBtnHandler);
    dropShadow.addEventListener('click', dropShadowHandler);
}

function sliderTask() {
    var imageWrapper = $('#images-wrapper');

    function slider() {
        setTimeout(() => {
            imageWrapper.css('right', '-100%');
        }, 5000);

        setTimeout(() => {
            imageWrapper.css('right', '-200%');
        }, 10000);

        setTimeout(() => {
            imageWrapper.css('right', '-300%');
        }, 15000);

        setTimeout(() => {
            imageWrapper.css('right', '-400%');
        }, 20000);

        setTimeout(() => {
            imageWrapper.css('right', '-500%');
        }, 25000);

        setTimeout(() => {
            imageWrapper.css('right', '0');
        }, 30000);
    }

    slider();
    setInterval(slider, 30000);
}

function serviceBoxesTask() {
    var
        dummyServiceBoxesData = [
            {
                logo: './images/filling-station.png',
                title: 'صدور موافقت اصولي اوليه تخصيص خوراك هيدروكربوري',
                href: '#',
            },
            {
                logo: './images/national-iranian-gas-company.png',
                title: 'صدور مجوز اولیه واردات کالای مرتبط نفتی و پتروشیمی',
                href: '#',
            },
            {
                logo: './images/ministry-of-petroleum-logo.png',
                title: 'صدور مجوز گازرسانی برای متقاضیان عمده',
                href: '#',
            },
            {
                logo: './images/complaints.png',
                title: 'بازرسی و رسیدگی به شکایات',
                href: '#',
            },
            // {
            //     logo: './images/ministry-of-petroleum-logo.png',
            //     title: 'درگاه ملی درخواست مجوز تامین خوراک پالایشگاه‌ها',
            //     href: '#',
            // },
            // {
            //     logo: './images/ministry-of-petroleum-logo.png',
            //     title: 'درگاه ملی درخواست مجوز تامین خوراک پالایشگاه‌ها',
            //     href: '#',
            // },
            // {
            //     logo: './images/ministry-of-petroleum-logo.png',
            //     title: 'درگاه ملی درخواست مجوز تامین خوراک پالایشگاه‌ها',
            //     href: '#',
            // },
            // {
            //     logo: './images/ministry-of-petroleum-logo.png',
            //     title: 'درگاه ملی درخواست مجوز تامین خوراک پالایشگاه‌ها',
            //     href: '#',
            // },
            // {
            //     logo: './images/ministry-of-petroleum-logo.png',
            //     title: 'درگاه ملی درخواست مجوز تامین خوراک پالایشگاه‌ها',
            //     href: '#',
            // },
            // {
            //     logo: './images/ministry-of-petroleum-logo.png',
            //     title: 'درگاه ملی درخواست مجوز تامین خوراک پالایشگاه‌ها',
            //     href: '#',
            // },
        ],
        serviceBoxes = document.querySelector('#service-boxes'),
        serviceBox
    ;

    function renderServiceBoxesLoop (data) {
        function convertStringToHTML(str) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(str, 'text/html');
            return doc.body.firstChild;
        }

        function serviceBoxStyleHandler() {
            if(data.length === 2) {
                serviceBox.style.width = '48%';
            } else if(data.length === 3) {
                serviceBox.style.width = '31%';
            } else if(data.length === 1) {
                serviceBoxes.style.justifyContent = 'center';
            }
        }

        function responsiveServiceBoxesHandler(width) {
            if (width.matches) {
                serviceBox.style.width = 'auto';
            }
        }

        for (let i = 0; i < data.length; i++) {
            serviceBox = convertStringToHTML(`
                <a class="service-box" href="${data[i].href}">
                    <img src="${data[i].logo}" alt=""/>
                    <div>${data[i].title}</div>
                </a>
            `);
            serviceBoxStyleHandler();
            var screenWidth = window.matchMedia("(max-width: 768px)");
            responsiveServiceBoxesHandler(screenWidth);
            screenWidth.addListener(responsiveServiceBoxesHandler);
            serviceBoxes.append(serviceBox);
        }
    }
    
    function renderServiceBoxes (data) {
        if(data.length < 4) {
            serviceBoxes.style.display = 'flex';
            renderServiceBoxesLoop(data);
        } else {
            renderServiceBoxesLoop(data);
        }
    }

    renderServiceBoxes(dummyServiceBoxesData);
}

sideNavTask();
sliderTask();
serviceBoxesTask();