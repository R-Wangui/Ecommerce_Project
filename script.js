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
        price: 120,
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
        productElement.classList.add ('product');
        productElement.innerHTML= `
        <img src="./Images/court-vision-low-shoes-mxK2Kk.png" alt="sneakers">
        <h3> ${product.name}</h3>
        <p> ${product.category}</p>
        <p> $${product.price}</p>`;
        productsSection.appendChild(productElement);
    })
} 
window. onload = displayProducts