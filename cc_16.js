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
