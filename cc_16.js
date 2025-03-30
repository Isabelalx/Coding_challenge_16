// Task 2: Fetch Products with .then()
const BASE_URL = 'https://www.course-api.com/javascript-store-products'; 
 
// Creating a function that uses fetch() with .then() 
function fetchProductsThen() {
  fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok"); 
      }
      return response.json(); 
    })
    .then(products => {
      products.forEach(product => console.log(product.fields.name));
    })
    .catch(error => {
      console.error('Fetch failed:', error);
    }); 
}

// Task 3: Fetch Products with async/await

async function fetchProductsAsync() {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok"); // Error handling for failed response
      }
      const products = await response.json(); // Parsing the response as JSON
      displayProducts(products); // Calling a helper function to render products to the page
    } catch (error) {
      handleError(error); // If an error occurs, passes it to handleError(error)
    }
  }

// Task 4: Display the Products
function displayProducts(products) {
    const container = document.getElementById("product-container"); // Selecting #product-container 
    container.innerHTML = ""; // Clearing the container before adding new products
  
    products.slice(0, 5).forEach(product => { // Limiting to 5 products
      const {name, price, image} = product.fields; 
      
      const productElement = document.createElement("div");
      productElement.classList.add("product");
  
      productElement.innerHTML = `
        <img src="${image[0].url}" alt="${name}">
        <h2>${name}</h2>
        <p>$${(price / 100).toFixed(2)}</p>
      `;
  
      container.appendChild(productElement); // Appending product to the main container
    });
  }
  
// Task 5: Reusable Error Handler
 // Creating a function to handle errors 
 function handleError(error) {
    console.error("An error occurred:", error.message);
  }
