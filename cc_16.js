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
