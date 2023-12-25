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