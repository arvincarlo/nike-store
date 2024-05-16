console.log('Everything was loaded successfully.');

const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        console.log(100 * index);
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    })
});