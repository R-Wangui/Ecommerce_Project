// document. getElementsByClassName("our-products") [1]. innerText = "Our Products"

// Data holding our products
let products = [
    {
        id: 1,
        name: "Airforce 1",
        img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
        category: "Jordans",
        price: 120,
    },
    {
        id: 2,
        img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
        name: "Airforce 1",
        category: "Jordans",
        price: 130,
    },
    {
        id: 3,
        img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
        name: "Airforce 1",
        category: "Jordans",
        price: 120,
    },
    {
        id: 4,
        img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
        name: "Airforce 1",
        category: "Jordans",
        price: 120,
    },
    {
        id: 5,
        img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
        name: "Airforce 1",
        category: "Jordans",
        price: 120,
    },
    {
        id: 6,
        img: `./Images/court-vision-low-shoes-mxK2Kk.png`,
        name: "Airforce 1",
        category: "Jordans",
        price: 120,
    }
]

// function to display dynamic products

function displayProducts () {
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
    // alert ("${productId} added to cart")
    const product = products.find(p => p.id === productId);
    cartItems.push(product);
    cartCount++;

    const cartIcon = document.getElementById ("cart-icon");
    cartIcon. textContent = `cart: ${cartCount}`
}
//Updating the cart when you add a product to cart
let cart = [];

function updateCartIcon () {
    const cartIcon = document. getElementById ("cart-icon");
}


window. onload = displayProducts