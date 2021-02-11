// product-item.js
var data = [];
var length = 21;

for(var i = 0; i < length; i++) {
   data.push(0);
}

if (localStorage.getItem("array") != null) {
   data=JSON.parse(localStorage.getItem("array"));
}



class ProductItem extends HTMLElement {
  constructor(){   
  super();
  const shadowRoot = this.attachShadow({mode: 'open'});
  shadowRoot.innerHTML = `
  <style>
  .price {
    color: green;
    font-size: 1.8em;
    font-weight: bold;
    margin: 0;
  }
  
  .product {
    align-items: center;
    background-color: white;
    border-radius: 5px;
    display: grid;
    grid-template-areas: 
    'image'
    'title'
    'price'
    'add';
    grid-template-rows: 67% 11% 11% 11%;
    height: 450px;
    filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
    margin: 0 30px 30px 0;
    padding: 10px 20px;
    width: 200px;
  }
  
  .product > button {
    background-color: rgb(255, 208, 0);
    border: none;
    border-radius: 5px;
    color: black;
    justify-self: center;
    max-height: 35px;
    padding: 8px 20px;
    transition: 0.1s ease all;
  }
  
  .product > button:hover {
    background-color: rgb(255, 166, 0);
    cursor: pointer;
    transition: 0.1s ease all;
  }
  
  .product > img {
    align-self: center;
    justify-self: center;
    width: 100%;
  }
  
  .title {
    font-size: 1.1em;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .title:hover {
    font-size: 1.1em;
    margin: 0;
    white-space: wrap;
    overflow: auto;
    text-overflow: unset;
  }
  </style>
  
  
  <li class="product">
  <img id="image" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
  <p id="title" class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
  <p id="price" class="price">$109.95</p>
  <button id="but">Add to Cart</button>
  </li>
                
`;
  

 
  
  }
}

customElements.define('product-item', ProductItem);
var list = document.getElementById('product-list');
var o1 = document.createElement('product-item');
o1.id="1";
list.appendChild(o1);
var o2 = document.createElement('product-item');
o2.shadowRoot.getElementById("price").innerHTML="$22.3";
o2.shadowRoot.getElementById("title").innerHTML="Mens Casual Premium Slim Fit T-Shirts ";
o2.shadowRoot.getElementById("image").alt="Mens Casual Premium Slim Fit T-Shirts ";
o2.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg";
o2.id="2";
list.appendChild(o2);
var o3 = document.createElement('product-item');
o3.shadowRoot.getElementById("price").innerHTML="$55.99";
o3.shadowRoot.getElementById("title").innerHTML="Mens Cotton Jacket";
o3.shadowRoot.getElementById("image").alt="Mens Cotton Jacket";
o3.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg";
o3.id="3";
list.appendChild(o3);
var o4 = document.createElement('product-item');
o4.shadowRoot.getElementById("price").innerHTML="$15.99";
o4.shadowRoot.getElementById("title").innerHTML="Mens Casual Slim Fit";
o4.shadowRoot.getElementById("image").alt="Mens Casual Slim Fit";
o4.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg";
o4.id="4";
list.appendChild(o4);
var o5 = document.createElement('product-item');
o5.shadowRoot.getElementById("price").innerHTML="$695";
o5.shadowRoot.getElementById("title").innerHTML="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet";
o5.shadowRoot.getElementById("image").alt="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet";
o5.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg";
o5.shadowRoot.getElementById("image").height=250;
o5.id="5";
list.appendChild(o5);
var o6 = document.createElement('product-item');
o6.shadowRoot.getElementById("price").innerHTML="$168";
o6.shadowRoot.getElementById("title").innerHTML="Solid Gold Petite Micropave ";
o6.shadowRoot.getElementById("image").alt="Solid Gold Petite Micropave ";
o6.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg";
o6.id="6";
list.appendChild(o6);
var o7 = document.createElement('product-item');
o7.shadowRoot.getElementById("price").innerHTML="$9.99";
o7.shadowRoot.getElementById("title").innerHTML="White Gold Plated Princess";
o7.shadowRoot.getElementById("image").alt="White Gold Plated Princess";
o7.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg";
o7.id="7";
list.appendChild(o7);
var o8 = document.createElement('product-item');
o8.shadowRoot.getElementById("price").innerHTML="$10.99";
o8.shadowRoot.getElementById("title").innerHTML="Pierced Owl Rose Gold Plated Stainless Steel Double";
o8.shadowRoot.getElementById("image").alt="Pierced Owl Rose Gold Plated Stainless Steel Double";
o8.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg";
o8.id="8";
list.appendChild(o8);
var o9 = document.createElement('product-item');
o9.shadowRoot.getElementById("price").innerHTML="$64";
o9.shadowRoot.getElementById("title").innerHTML="WD 2TB Elements Portable External Hard Drive - USB 3.0 ";
o9.shadowRoot.getElementById("image").alt="WD 2TB Elements Portable External Hard Drive - USB 3.0 ";
o9.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg";
o9.id="9";
list.appendChild(o9);
var o10 = document.createElement('product-item');
o10.shadowRoot.getElementById("price").innerHTML="$109";
o10.shadowRoot.getElementById("title").innerHTML="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s";
o10.shadowRoot.getElementById("image").alt="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s";
o10.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg";
o10.id="10";
list.appendChild(o10);
var o11 = document.createElement('product-item');
o11.shadowRoot.getElementById("price").innerHTML="$109";
o11.shadowRoot.getElementById("title").innerHTML="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5";
o11.shadowRoot.getElementById("image").alt="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5";
o11.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg";
o11.id="11";
list.appendChild(o11);
var o12 = document.createElement('product-item');
o12.shadowRoot.getElementById("price").innerHTML="$114";
o12.shadowRoot.getElementById("title").innerHTML="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive";
o12.shadowRoot.getElementById("image").alt="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive";
o12.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg";
o12.id="12";
list.appendChild(o12);
var o13 = document.createElement('product-item');
o13.shadowRoot.getElementById("price").innerHTML="$599";
o13.shadowRoot.getElementById("title").innerHTML="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin";
o13.shadowRoot.getElementById("image").alt="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin";
o13.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg";
o13.id="13";
list.appendChild(o13);
var o14 = document.createElement('product-item');
o14.shadowRoot.getElementById("price").innerHTML="$999.99";
o14.shadowRoot.getElementById("title").innerHTML="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ";
o14.shadowRoot.getElementById("image").alt="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ";
o14.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg";
o14.id="14";
list.appendChild(o14);
var o15 = document.createElement('product-item');
o15.shadowRoot.getElementById("price").innerHTML="$56.99";
o15.shadowRoot.getElementById("title").innerHTML="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats";
o15.shadowRoot.getElementById("image").alt="BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats";
o15.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg";
o15.id="15";
list.appendChild(o15);
var o16 = document.createElement('product-item');
o16.shadowRoot.getElementById("price").innerHTML="$29.95";
o16.shadowRoot.getElementById("title").innerHTML="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket";
o16.shadowRoot.getElementById("image").alt="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket";
o16.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg";
o16.id="16";
list.appendChild(o16);
var o17 = document.createElement('product-item');
o17.shadowRoot.getElementById("price").innerHTML="$39.99";
o17.shadowRoot.getElementById("title").innerHTML="Rain Jacket Women Windbreaker Striped Climbing Raincoats";
o17.shadowRoot.getElementById("image").alt="Rain Jacket Women Windbreaker Striped Climbing Raincoats";
o17.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg";
o17.shadowRoot.getElementById("image").height=250;
o17.id="17";
list.appendChild(o17);
var o18 = document.createElement('product-item');
o18.shadowRoot.getElementById("price").innerHTML="$18";
o18.shadowRoot.getElementById("title").innerHTML="MBJ Women's Solid Short Sleeve Boat Neck V ";
o18.shadowRoot.getElementById("image").alt="MBJ Women's Solid Short Sleeve Boat Neck V ";
o18.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg";
o18.id="18";
list.appendChild(o18);
var o19 = document.createElement('product-item');
o19.shadowRoot.getElementById("price").innerHTML="$7.95";
o19.shadowRoot.getElementById("title").innerHTML="Opna Women's Short Sleeve Moisture";
o19.shadowRoot.getElementById("image").alt="Opna Women's Short Sleeve Moisture";
o19.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg";
o19.id="19";
list.appendChild(o19);
var o20 = document.createElement('product-item');
o20.shadowRoot.getElementById("price").innerHTML="$12.99";
o20.shadowRoot.getElementById("title").innerHTML="DANVOUY Womens T Shirt Casual Cotton Short";
o20.shadowRoot.getElementById("image").alt="DANVOUY Womens T Shirt Casual Cotton Short";
o20.shadowRoot.getElementById("image").src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg";
o20.id="20";
list.appendChild(o20);

o1.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o1);
}, true);

o2.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o2);
}, true);
       
o3.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o3);
}, true);
o4.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o4);
}, true);
o5.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o5);
}, true);
o6.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o6);
}, true);

o7.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o7);
}, true);

o8.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o8);
}, true);

o9.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o9);
}, true);

o10.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o10);
}, true);

o11.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o11);
}, true);

o12.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o12);
}, true);

o13.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o13);
}, true);

o14.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o14);
}, true);

o15.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o15);
}, true);

o16.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o16);
}, true);

o17.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o17);
}, true);

o18.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o18);
}, true);

o19.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o19);
}, true);

o20.shadowRoot.getElementById("but").addEventListener("click", function() {
  displayCart(o20);
}, true);

function displayCart(obj){
  if (obj.shadowRoot.getElementById("but").innerHTML=="Add to Cart"){
    obj.shadowRoot.getElementById("but").onclick=alert("Added to Cart!");
    obj.shadowRoot.getElementById("but").innerHTML="Remove from Cart";
    var count= parseInt(document.getElementById("cart-count").innerHTML)+1;
    document.getElementById("cart-count").innerHTML=count.toString();
    var position = parseInt(obj.id);
    data[position]= 1;
    localStorage.setItem("array", JSON.stringify(data));
    
 }
  else{
    obj.shadowRoot.getElementById("but").onclick=alert("Removed from Cart!");
    var count= parseInt(document.getElementById("cart-count").innerHTML)-1;
    document.getElementById("cart-count").innerHTML=count.toString();
    obj.shadowRoot.getElementById("but").innerHTML="Add to Cart";
    var position = parseInt(obj.id);
    data[position]= 0 ;
    localStorage.setItem("array", JSON.stringify(data));
  }

}
  


