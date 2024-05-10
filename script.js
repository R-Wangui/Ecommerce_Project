// document. getElementsByClassName("our-products") [1]. innerText = "Our Products"

// Data holding our products
// let products = [
//     {
//         id: 1,
//         name: "Airforce 1",
//         img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
//         category: "Jordans",
//         price: 120,
//     },
//     {
//         id: 2,
//         img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
//         name: "Airforce 1",
//         category: "Jordans",
//         price: 130,
//     },
//     {
//         id: 3,
//         img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
//         name: "Airforce 1",
//         category: "Jordans",
//         price: 120,
//     },
//     {
//         id: 4,
//         img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
//         name: "Airforce 1",
//         category: "Jordans",
//         price: 120,
//     },
//     {
//         id: 5,
//         img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
//         name: "Airforce 1",
//         category: "Jordans",
//         price: 120,
//     },
//     {
//         id: 6,
//         img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
//         name: "Airforce 1",
//         category: "Jordans",
//         price: 120,
//     }
// ]

// function to dynamically display products

function displayProducts ({data}) {
    const productsSection = document. getElementById ("products");
    products.forEach (product => {
        const productElement = document.createElement('div');
        productElement.classList.add ('product-container');
        productElement.innerHTML= `
        <img src="./Images/court-vision-low-shoes-mxK2Kk.png" alt="sneakers">
        <div class="product-description">
            <button class="btn" onclick="addToCart(${product.id})">Add to cart</button>
            <h4> ${product.name}</h4>
            <p> ${product.category}</p>
            <p> $${product.price}</p>
        </div>`;
        
        productsSection.appendChild(productElement);
    })
} 
// Add to cart alert when you add an item to cart
function addToCart (productId, cartCount) {
    // alert (`${productId} added to cart`)
    const product = products.find(p => p.id === productId);
    cartItems.push(product);
    cartCount++;

    const cartIcon = document.getElementById ("cart-icon");
    cartIcon.textContent = `cart: ${cartCount}`
}
//Updating the cart when you add a product to cart
let cart = [];

function updateCartIcon () {
    const cartIcon = document.getElementById ("cart-icon");
}

// Adding event listeners for the form 

document. addEventListener('DOMContentLoaded', function() {
    // Adding an event listener to these elements in the DOM so when it loads the events are triggered
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    // const subscribe = document.getElementById("subscribe");
    const message = document.getElementById("message");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // validating the email
        const email = emailInput.value 
        if (validateEmail(email)) {
            message.textContent = 'Thankyou for subscribing';
            emailInput.value = '';
        } else {
            message.textContent = 'Please enter a valid email';
        }
    });

    // form.addEventListener('submit', function(event) {
    //     alert ("Thankyou for subscribing!")
    // });
    
    // function validateEmail(email) {
    //     const re = /\S+@\S+\.\S+/;
    //     const re.test(email);
    // }
});

window. onload = displayProducts