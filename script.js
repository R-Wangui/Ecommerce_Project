// document. getElementsByClassName("our-products") [1]. innerText = "Our Products"

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
        <button class="btn" onclick="addToCart(${product.id})">Add to card</button>
        <h4> ${product.name}</h4>
        <p> ${product.category}</p>
        <p> $${product.price}</p>`;
        
        productsSection.appendChild(productElement);
    })
} 
// Add to cart alert when you add an item to cart
function addToCart (productId) {
    alert ("productId added to cart")
}

window. onload = displayProducts