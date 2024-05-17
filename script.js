import products from './data.js';

// document. getElementsByClassName("our-products") [1]. innerText = "Our Products"


// function to dynamically display products
function displayProducts () {
    const productsSection = document.getElementById ("products");
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
    });
} 

// Add to cart alert when you add an item to cart
function addToCart (productId) {
    alert (`${productId} added to cart`)
    // const product = products.find(p => p.id === productId);
    // cart.push(product);
    // updateCartIcon();

    // const cartIcon = document.getElementById ("cart-icon");
    // cartIcon.textContent = `cart: ${cartCount}`
}
//Updating the cart when you add a product to cart
let cart = [];
function updateCartIcon () {
    const cartIcon = document.getElementById("cart-icon");
    cartIcon.textContent = `Cart: ${cart.length}`;
}
// Adding event listeners to the add to cart button
const addToCartButtons = document.querySelectorAll("btn");
addToCartButtons.forEach(button => {
    const productId = (button.products.id)
    button.addEventListener('click', () => {
        addToCart(productId);
    });
})



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