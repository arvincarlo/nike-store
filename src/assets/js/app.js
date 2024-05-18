
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        backgroundColor: "#baf0ff",
        colors: [
            {
                code: "black",
                img: "/src/assets/images/air.png",
            },
            {
                code: "#1b2843",
                img: "/src/assets/images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 8990,
        backgroundColor: "#bcf7d4",
        colors: [
            {
                code: "lightgray",
                img: "/src/assets/images/jordan.png",
            },
            {
                code: "green",
                img: "/src/assets/images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 10990,
        backgroundColor: "#f4c6ff",
        colors: [
            {
                code: "lightgray",
                img: "/src/assets/images/blazer.png",
            },
            {
                code: "green",
                img: "/src/assets/images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        backgroundColor: "#fdf9c1",
        colors: [
            {
                code: "black",
                img: "/src/assets/images/crater.png",
            },
            {
                code: "lightgray",
                img: "/src/assets/images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        backgroundColor: "#f7c1ac",
        colors: [
            {
                code: "gray",
                img: "/src/assets/images/hippie.png",
            },
            {
                code: "black",
                img: "/src/assets/images/hippie2.png",
            },
        ],
    },
    {
        id: 6,
        title: "Court",
        price: 99,
        backgroundColor: "#ffeece",
        colors: [
            {
                code: "#C92D3B",
                img: "/src/assets/images/court.png",
            },
            {
                code: "#b0cde9",
                img: "/src/assets/images/court2.png",
            },
        ],
    },
];

let [chosenProduct] = products;

const currentProductImage = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const productPage = document.querySelector('#products');
const buttons = document.querySelectorAll('.buyButton');

// Functions
const resetColors = () => {
    currentProductColors.forEach(childColor => childColor.classList.remove('selected'));
};

const changeProductsBackground = (index) => {
    productPage.style.backgroundColor = products[index].backgroundColor;
}
// End of functions

// Event handlers
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slid
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the chosen product
        chosenProduct = products[index];

        // change text of the current product
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = `P ${chosenProduct.price}`;

        // changeimage source
        currentProductImage.src = chosenProduct.colors[0].img;

        // Assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })

        // Reset the color picker
        resetColors();
        currentProductColors[0].classList.add('selected');

        // Change product page colors
        changeProductsBackground(index);
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', (e) => {
        currentProductImage.src = chosenProduct.colors[index].img;
        resetColors();
        currentProductColors[index].classList.add('selected');
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', (e) => {
        // Reset button
        currentProductSizes.forEach(size => {
            size.style.backgroundColor = 'transparent';
            size.style.color = 'black';
        });

        // Change button color
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
});

// Changing of products background when clicking "buy" button
buttons.forEach((button, index) => button.addEventListener('click', () => changeProductsBackground(index)));

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Modal show
productButton.addEventListener('click', () => payment.style.display = "flex");

// Modal hide
close.addEventListener('click', () => payment.style.display = "none");

