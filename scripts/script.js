// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => window.localStorage.setItem("arrays", JSON.stringify(data)));


  
});