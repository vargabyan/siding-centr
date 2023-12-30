document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-sell-products-toggle-hidden]');

    if (btn) {
        const wrapper = e.target.closest('[data-sell-products-item]');
        const itemContent = wrapper.querySelector('[data-sell-products-item-content]');

        itemContent.classList.toggle('close')
        btn.classList.toggle('close')
    }
})

document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-vacancies-item-btn-hidden]');

    if (btn) {
        const wrapper = e.target.closest('[data-vacancies-item]');
        const itemContent = wrapper.querySelector('[data-vacancies-item-obligation]');

        itemContent.classList.toggle('close')
        btn.classList.toggle('close')
    }
})

document.addEventListener('click', (e) => {
    const toggleDescription = e.target.closest('[data-description-and-specifications-toggle-description]');
    const toggleSpecifications = e.target.closest('[data-description-and-specifications-toggle-specifications]');


    if (toggleDescription) {
        const wrapper = e.target.closest('[data-description-and-specifications-wrapper]');
        const specifications = wrapper.querySelector('[data-description-and-specifications-specifications]');
        const description = wrapper.querySelector('[data-description-and-specifications-description]');
        const oldAssetButton = wrapper.querySelector('[data-description-and-specifications-toggle-specifications] ').querySelector('p');

        description.classList.add('active')
        specifications.classList.remove('active')
        toggleDescription.querySelector('p').classList.add('active')
        oldAssetButton.classList.remove('active')
    }
    if (toggleSpecifications) {
        const wrapper = e.target.closest('[data-description-and-specifications-wrapper]');
        const specifications = wrapper.querySelector('[data-description-and-specifications-specifications]');
        const description = wrapper.querySelector('[data-description-and-specifications-description]');
        const oldAssetButton = wrapper.querySelector('[data-description-and-specifications-toggle-description]').querySelector('p');


        specifications.classList.add('active')
        description.classList.remove('active')
        oldAssetButton.classList.remove('active')
        toggleSpecifications.querySelector('p').classList.add('active')
    }
})

document.querySelectorAll('.swiper-slider-wrapper-for-goods').forEach((e, index) => {
    new Swiper( document.querySelectorAll('.swiper-slider-wrapper-for-goods')[index], {
        navigation: {
            nextEl: document.querySelectorAll('.slider-wrapper-for-goods_next')[index],
            prevEl: document.querySelectorAll('.slider-wrapper-for-goods_prev')[index],
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            690: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
})
