console.log("Everything was loaded successfully.");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "/src/assets/images/air.png",
            },
            {
                code: "darkblue",
                img: "/src/assets/images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 8990,
        backgroundColor: "#baf0ff",
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
        id: 5,
        title: "Court",
        price: 99,
        colors: [
            {
                code: "pink",
                img: "/src/assets/images/air2.png",
            },
            {
                code: "#BADA55",
                img: "/src/assets/images/hippie2.png",
            },
        ],
    },
];

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

let [chosenProduct] = products;

const currentProductImage = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

console.log(currentProductImage)

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
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', (e) => {
        currentProductImage.src = chosenProduct.colors[index].img;
        resetColors();
        currentProductColors[index].classList.add('selected');
    });
});

const resetColors = () => {
    currentProductColors.forEach(childColor => childColor.classList.remove('selected'));
};

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

const buttons = document.querySelectorAll('.buyButton');
buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        // alert(products[index].backgroundColor);
        const products = document.querySelector('#products');
        products.style.backgroundColor = products[index].backgroundColor || 'black';
    })
})


