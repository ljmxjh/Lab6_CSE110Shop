// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(data => window.localStorage.setItem("arrays", JSON.stringify(data)));
   
  var data = JSON.parse(localStorage.getItem("array"));
  for(var i =0; i<data.length;i++){
      if(data[i]==1){
        var id = i.toString();
        var obj = document.getElementById(id);
        obj.shadowRoot.getElementById("but").innerHTML="Remove from Cart";
        var count= parseInt(document.getElementById("cart-count").innerHTML)+1;
        document.getElementById("cart-count").innerHTML=count.toString();
      }
  }

  
});