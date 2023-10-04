document.addEventListener('DOMContentLoaded', function () {

    // MOBILE MENU
    const toggle = document.querySelector('.toggle');
    const desktopNav = document.querySelector('.desktop-nav');
    const closeBtn = document.querySelector('#closeBtn')

    toggle.addEventListener('click', () => {
        desktopNav.classList.remove('hidden')
    })

    closeBtn.addEventListener('click', () => {
        desktopNav.classList.add('hidden')
    })

    // desktopNav

    // const modal = document.querySelector("#modal");
    // const openModal = document.querySelector(".open-button");
    // const closeModal = document.querySelector(".close-button");

    // toggle.addEventListener("click", () => {
    //     modal.showModal();
    // });

    // closeBtn.addEventListener("click", () => {
    //     modal.setAttribute("closing", "");

    //     modal.addEventListener(
    //         "animationend",
    //         () => {
    //             modal.removeAttribute("closing");
    //             modal.close();
    //         },
    //         { once: true }
    //     );
    // });


    // ANIMATING THE LINES 
    // window.onscroll = function () {
    //     console.log('lineScroll function called'); // Add this line for debugging
    //     lineScroll();
    // };

    // function lineScroll() {
    //     const line = document.querySelector('.line');
    //     const scrollPosition = document.documentElement.scrollTop;
    //     const containerBelow = document.querySelector('.next-section');
    //     const containerBelowTop = containerBelow.offsetTop - 50;

    //     if (scrollPosition > 50 && scrollPosition < containerBelowTop) {
    //         line.style.height = `${scrollPosition - 50}px`;
    //         line.style.opacity = 1;
    //     } else if (scrollPosition >= containerBelowTop) {
    //         line.style.height = `${containerBelowTop - 50}px`;
    //         line.style.opacity = 1;
    //     } else {
    //         line.style.height = '0';
    //         line.style.opacity = 0;
    //     }
    // }

    // Calculate the start point and endpoint based on the screen height
    const lineTrigger = document.querySelector('.line-trigger');
    const line = document.querySelector('.line');
    const startPointTrigger = document.querySelector('#startPointTrigger');
    const endpointTrigger = document.querySelector('#endpointTrigger');

    let startPoint = startPointTrigger.offsetTop; // Get the actual position of startPointTrigger
    const endpoint = endpointTrigger.offsetTop;

    // Calculate the total scrollable distance
    let totalDistance = endpoint - startPoint;

    // Add a scroll event listener to handle the line's visibility
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition < startPoint) {
            // Scroll position is before the startPoint, set line height to a minimum value
            line.style.opacity = 0; // Hide the line
        } else if (scrollPosition < endpoint) {
            // Scroll position is between startPoint and endpoint, calculate line height
            const distanceScrolled = scrollPosition - startPoint;
            const lineHeight = (distanceScrolled / totalDistance) * 100;
            line.style.height = `${lineHeight}%`;
            line.style.opacity = 1; // Show the line
        } else {
            // Scroll position is beyond the endpoint, set line height to 100%
            line.style.height = '100%';
            line.style.opacity = 1; // Show the line
        }

        // Update startPoint and totalDistance dynamically based on startPointTrigger's position
        startPoint = startPointTrigger.offsetTop;
        totalDistance = endpoint - startPoint;
    });

    // SET TIMEOUT TO DISPLAY HERO TEXT
    const heroTitle = document.querySelector('#heroHeading');
    const heroText = document.querySelector('#heroText');
    const megaText = document.querySelector('#megaText');

    setTimeout(heroChange, 1000);

    function heroChange() {
        megaText.style.color = 'rgba(0, 0, 0, 0.7)';
        heroTitle.style.opacity = '1'
        typeWriter();
    }

    // TYPEWRITER EFFECT
    let i = 0;
    const txt = 'We specialise in creating modern, engaging websites for businesses looking to attract foreign visitors.';
    const speed = 30;

    function typeWriter() {
        if (i < txt.length) {
            heroText.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // COLOR CHANGE ON SCROLL
    window.onscroll = function () {
        colorChange();
    };

    function colorChange() {
        const info = document.querySelector('.info');
        const design = document.getElementById("design");
        const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

        if (scrollPosition > 400) {
            // When scrolling down
            info.style.backgroundColor = "white";
            info.style.color = "var(--textBlack)";
            design.style.color = "purple";
        } else {
            // When scrolling back up
            info.style.backgroundColor = ""; // Revert to default background color
            info.style.color = ""; // Revert to default text color
            design.style.color = ""; // Revert to default text color
        }
    }


    // SERVICES SECTION CONTAINER SLIDE IN
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);

            } else {
                entry.target.classList.remove('show');
            }
        })
    }, { threshold: .01 });
    const serviceContainers = document.querySelectorAll('.services-content-border');
    serviceContainers.forEach((el) => observer.observe(el));


    // DROPDOWNS
    const consultWrapper = document.querySelector('.consult-wrapper');
    const consultArrow = document.querySelector('#consultArrow')
    consultWrapper.addEventListener('click', () => {
        const consultDropdown = document.querySelector('.consult-dropdown');
        const currentOpacity = parseFloat(getComputedStyle(consultDropdown).opacity);
        if (currentOpacity === 0) {
            consultDropdown.style.opacity = '1';
            consultArrow.classList.add('rotate')
        } else {
            consultDropdown.style.opacity = '0';
            consultArrow.classList.remove('rotate')
        }
    });

    const designWrapper = document.querySelector('.design-wrapper');
    const designArrow = document.querySelector('#designArrow')
    designWrapper.addEventListener('click', () => {
        const designDropdown = document.querySelector('.design-dropdown');
        const currentOpacity = parseFloat(getComputedStyle(designDropdown).opacity);
        if (currentOpacity === 0) {
            designDropdown.style.opacity = '1';
            designArrow.classList.add('rotate-anti')
        } else {
            designDropdown.style.opacity = '0';
            designArrow.classList.remove('rotate-anti')
        }
    });

    const createWrapper = document.querySelector('.create-wrapper');
    const createArrow = document.querySelector('#createArrow')
    createWrapper.addEventListener('click', () => {
        const createDropdown = document.querySelector('.create-dropdown');
        const currentOpacity = parseFloat(getComputedStyle(createDropdown).opacity);
        if (currentOpacity === 0) {
            createDropdown.style.opacity = '1';
            createArrow.classList.add('rotate')
        } else {
            createDropdown.style.opacity = '0';
            createArrow.classList.remove('rotate')
        }
    });

    const deliverWrapper = document.querySelector('.deliver-wrapper');
    const deliverArrow = document.querySelector('#deliverArrow')
    deliverWrapper.addEventListener('click', () => {
        const deliverDropdown = document.querySelector('.deliver-dropdown');
        const currentOpacity = parseFloat(getComputedStyle(deliverDropdown).opacity);
        if (currentOpacity === 0) {
            deliverDropdown.style.opacity = '1';
            deliverArrow.classList.add('rotate-anti')
        } else {
            deliverDropdown.style.opacity = '0';
            deliverArrow.classList.remove('rotate-anti')
        }
    });


    // INTERSECTION OBSERVERS

    // consult
    const consult = document.querySelector('.consult');

    const consultObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('consult intersecting');
                const consultDropdown = document.querySelector('.consult-dropdown');
                consultDropdown.style.opacity = "1"
                consultArrow.classList.add('rotate')
                // Optionally, stop observing after the first intersection
                observer.unobserve(consult);
            }
        });
    }, {
        rootMargin: '-40% 0px',
        threshold: 1
    });

    consultObserver.observe(consult);

    // design
    const design = document.querySelector('.design');

    const designObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('design intersecting');
                const designDropdown = document.querySelector('.design-dropdown');
                designDropdown.style.opacity = "1"
                designArrow.classList.add('rotate-anti')

                observer.unobserve(design);
            }
        });
    }, {
        rootMargin: '-40% 0px',
        threshold: 1
    });

    designObserver.observe(design);

    // create
    const create = document.querySelector('.create');

    const createObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('create intersecting');
                const createDropdown = document.querySelector('.create-dropdown');
                createDropdown.style.opacity = "1"
                createArrow.classList.add('rotate')

                observer.unobserve(create);
            }
        });
    }, {
        rootMargin: '-40% 0px',
        threshold: 1
    });

    createObserver.observe(create);

    // deliver
    const deliver = document.querySelector('.deliver');

    const deliverObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('deliver intersecting');
                const deliverDropdown = document.querySelector('.deliver-dropdown');
                deliverDropdown.style.opacity = "1"
                deliverArrow.classList.add('rotate-anti')

                observer.unobserve(deliver);
            }
        });
    }, {
        rootMargin: '-40% 0px',
        threshold: 1
    });

    deliverObserver.observe(deliver);


    // CHANGE IMAGE ON HOVER 
    // canguu
    const canguuImageElement = document.getElementById('imageCanguu');
    const canguuImageContainer = document.querySelector('.canguu-img')
    const canguuDefaultImageSrc = 'assets/canguu-screenshot.png';
    const canguuHoverImageSrc = 'assets/canguu-mob.webp';

    canguuImageContainer.addEventListener('mouseenter', () => {
        canguuImageElement.src = canguuHoverImageSrc;
    });

    canguuImageContainer.addEventListener('mouseleave', () => {
        canguuImageElement.src = canguuDefaultImageSrc;
    });

    // thamel
    const thamelImageElement = document.getElementById('imageThamel');
    const thamelImageContainer = document.querySelector('.thamel-img')
    const thamelDefaultImageSrc = 'assets/thamel-screenshot.webp';
    const thamelHoverImageSrc = 'assets/thamel-mob.webp';

    thamelImageContainer.addEventListener('mouseenter', () => {
        thamelImageElement.src = thamelHoverImageSrc;
    });

    thamelImageContainer.addEventListener('mouseleave', () => {
        thamelImageElement.src = thamelDefaultImageSrc;
    });

    // xmax
    const xmaxImageElement = document.getElementById('imageXmax');
    const xmaxImageContainer = document.querySelector('.xmax-img')
    const xmaxDefaultImageSrc = 'assets/xmax-screenshot.webp';
    const xmaxHoverImageSrc = 'assets/xmax-mob.webp';

    xmaxImageContainer.addEventListener('mouseenter', () => {
        xmaxImageElement.src = xmaxHoverImageSrc;
    });

    xmaxImageContainer.addEventListener('mouseleave', () => {
        xmaxImageElement.src = xmaxDefaultImageSrc;
    });

    // COLOR FLIP ON PORTFOLIO PROJECTS
    const portfolioObserver = new IntersectionObserver((entries) => {
        const someText = document.querySelector('#someText')
        const deliverDropdown = document.querySelector('#deliverDropdown')
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('light');
                entry.target.classList.remove('dark');
                someText.style.color = 'purple'
                deliverDropdown.style.color = 'black'
            } else {
                entry.target.classList.add('dark');
                entry.target.classList.remove('light')
                someText.style.color = 'var(--yellow)'
                deliverDropdown.style.color = 'var(--textWhite)'
            }
        })
    }, { threshold: 1 });
    const portfolioContainers = document.querySelectorAll('.flip');
    portfolioContainers.forEach((el) => portfolioObserver.observe(el));




});