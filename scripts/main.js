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
        nav.style.backgroundColor = '#fafafa';
        nav.style.marginTop = '5px';
    } else {
        nav.style.backgroundColor = '';
        nav.style.marginTop = '0px';
    }
});

document.querySelectorAll('.faq details').forEach((detail) => {
    console.log(detail);
    detail.addEventListener('toggle', (event) => {
        if (event.target.open) {
            document.querySelectorAll('.faq details').forEach((otherDetail) => {
                if (otherDetail !== event.target) {
                    otherDetail.removeAttribute('open');
                }
            });
        }
    });
});

const modal = document.getElementById('modal');
const btns = document.querySelectorAll('.open-modal');
const span = document.getElementById('close-modal');

btns.forEach((btn) => {
    btn.onclick = function () {
        modal.style.display = 'block';
    };
});

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

document.getElementById('modal-form').onsubmit = function (e) {
    e.preventDefault();

    alert('Форма отправлена!');
    modal.style.display = 'none';
};
