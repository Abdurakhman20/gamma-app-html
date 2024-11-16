const isMobile = () => {
    return window.innerWidth <= 430;
};

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const secondSwiper = new Swiper('.portfolio__swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const nav = document.querySelector('.nav');

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        if (isMobile()) {
            nav.style.height = '70px';
            nav.style.backgroundColor = '#fafafa';
            return;
        }
        nav.style.backgroundColor = '#fafafa';
        nav.style.marginTop = '5px';
    } else {
        nav.style.backgroundColor = '';
        nav.style.marginTop = '0px';
    }
});

document.querySelectorAll('.faq details').forEach((detail) => {
    detail.addEventListener('toggle', (e) => {
        if (e.target.open) {
            document.querySelectorAll('.faq details').forEach((otherDetail) => {
                if (otherDetail !== e.target) {
                    otherDetail.removeAttribute('open');
                }
            });
        }
    });
});

const modal = document.getElementById('modal');
const modalForm = document.getElementById('modal-form');
const btns = document.querySelectorAll('.open-modal');
const span = document.getElementById('close-modal');

btns.forEach((btn) => {
    btn.onclick = () => {
        modal.style.display = 'block';
    };
});

span.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
};

modalForm.onsubmit = (e) => {
    e.preventDefault();

    const data = new FormData(modalForm);
    modal.style.display = 'none';

    if (
        confirm(`Подтвердите отправку формы: 
        Имя: ${data.get('name')}
        Email: ${data.get('email')}
        Телефон: ${data.get('phone')}`)
    ) {
        console.log(`
            Имя: ${data.get('name')}
            Email: ${data.get('email')}
            Телефон: ${data.get('phone')}
        `);

        modalForm.reset();
    } else {
        modalForm.reset();
    }
};

const burgerBtn = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');

    if (burgerBtn.classList.contains('open')) {
        navList.style.left = '0px';
    } else {
        navList.style.left = '-1000px';
    }

    navItems.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            burgerBtn.classList.remove('open');
            navList.style.left = '-1000px';
        });
    });
});
