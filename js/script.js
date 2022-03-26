const placesSvg = document.querySelector(".places__svg");
const totalPriceTag = document.querySelector(".price__total");
const menuButton = document.querySelector(".m__menu");
const menu = document.querySelector(".menu");
let totalPrice = 0;
let cost = 7;

placesSvg.addEventListener("click", (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
        let totalSeats = placesSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is__open');
});

