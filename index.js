let cartIcon = document.querySelector("#cart-icon");
let cart= document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");


// open and close
cartIcon.onclick = () => {
    cart.classList.add("active");
}
closeCart.onclick = () => {
    cart.classList.remove("active");
}

// working cart
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)}
    else{
        ready();
    }
// making function
function ready() {
// remove items from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove")
  for(var i = 0; i < removeCartButtons.length; i++){
      var button = removeCartButtons[i]
      button.addEventListener('click', removeCartItem)
  }
  // quantity changes 
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++){
      var input = quantityInputs[i];
      input.addEventListener('change', quantityChanged);
  }
  // add to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++){
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
  }
  updateTotal();
}
document.getElementsByClassName("btn")[0].addEventListener('click', buyButtonClicked);
  function buyButtonClicked() {
      alert("Your order is placed!")
      var cartContent = document.getElementsByClassName("cart-content")[0]
      while (cartContent.hasChildNodes()){
          cartContent.removeChild(cartContent.firstChild)
      }
      updateTotal();
    }


// remove items from cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal();
}
// quantity changed 

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

function addCartClicked(event) {
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsnames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsnames.length; i++){
        if (cartItemsnames[i].innerText == title) {
        alert("You have already add this item to cart");
        return;
    }
    updateTotal();
}
var cartBoxContent = `
                       <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                          <input type="number"  class="cart-quantity" value="1">
                        </div>
                        <i class="fa-solid fa-trash-can cart-remove"></i>

`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener("change", quantityChanged);

}



// update total
function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        var total = total + (price * quantity);
    }

    total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    
}


const filterMenuBtn = document.getElementById("filter-menu-btn");
const filterMenu = document.querySelector('.filter-container');

filterMenuBtn.addEventListener("click", () => {
    filterMenu.classList.toggle("active");
})


const liShirts = document.getElementById("shirts");
const products = document.getElementsByClassName("product-box");

liShirts.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("hidden");
        products[0].classList.add("shirts");
        products[7].classList.remove("shoes");
        products[6].classList.remove("backpack");
        products[5].classList.remove("hats");
        products[1].classList.remove("earbuds");
        products[4].classList.remove("sunglasses");
        products[2].classList.remove("parkas");
        products[3].classList.remove("bottles");
    }
})
const liAll = document.getElementById("all");

liAll.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.remove("hidden");
        products[0].classList.remove("shirts");
        products[7].classList.remove("shoes");
        products[6].classList.remove("backpack");
        products[5].classList.remove("hats");
        products[4].classList.remove("sunglasses");
        products[1].classList.remove("earbuds");
        products[2].classList.remove("parkas");
        products[3].classList.remove("bottles");
    }
})

const liShoes = document.getElementById("shoes");

liShoes.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("hidden");
        products[0].classList.remove("shirts");
        products[7].classList.add("shoes");
        products[6].classList.remove("backpack");
        products[5].classList.remove("hats");
        products[4].classList.remove("sunglasses");
        products[1].classList.remove("earbuds");
        products[2].classList.remove("parkas");
        products[3].classList.remove("bottles");
    }
})

const liBackpacks = document.getElementById("backpacks");

liBackpacks.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("hidden");
        products[0].classList.remove("shirts");
        products[7].classList.remove("shoes");
        products[6].classList.add("backpack");
        products[5].classList.remove("hats");
        products[4].classList.remove("sunglasses");
        products[1].classList.remove("earbuds");
        products[2].classList.remove("parkas");
        products[3].classList.remove("bottles");
    }
})

const lihats = document.getElementById("hats");

lihats.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("hidden");
        products[0].classList.remove("shirts");
        products[7].classList.remove("shoes");
        products[6].classList.remove("backpack");
        products[5].classList.add("hats");
        products[4].classList.remove("sunglasses");
        products[1].classList.remove("earbuds");
        products[2].classList.remove("parkas");
        products[3].classList.remove("bottles");
    }
})
const liSunglasses= document.getElementById("sunglasses");

liSunglasses.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("hidden");
        products[0].classList.remove("shirts");
        products[7].classList.remove("shoes");
        products[6].classList.remove("backpack");
        products[5].classList.remove("hats");
        products[4].classList.add("sunglasses");
        products[1].classList.remove("earbuds");
        products[2].classList.remove("parkas");
        products[3].classList.remove("bottles");
    }
})
const liEarbuds= document.getElementById("earbuds");

liEarbuds.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("hidden");
        products[0].classList.remove("shirts");
        products[7].classList.remove("shoes");
        products[6].classList.remove("backpack");
        products[5].classList.remove("hats");
        products[4].classList.remove("sunglasses");
        products[1].classList.add("earbuds");
        products[2].classList.remove("parkas");
        products[3].classList.remove("bottles");
    }
})

const liParkas = document.getElementById("parka's");

liParkas.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("hidden");
        products[0].classList.remove("shirts");
        products[7].classList.remove("shoes");
        products[6].classList.remove("backpack");
        products[5].classList.remove("hats");
        products[4].classList.remove("sunglasses");
        products[1].classList.remove("earbuds");
        products[2].classList.add("parkas");
        products[3].classList.remove("bottles");
    }
})

const liBottles = document.getElementById("bottles");

liBottles.addEventListener('click', () => {
    for (let i = 0; i < products.length; i++) {
        products[i].classList.add("hidden");
        products[0].classList.remove("shirts");
        products[7].classList.remove("shoes");
        products[6].classList.remove("backpack");
        products[5].classList.remove("hats");
        products[4].classList.remove("sunglasses");
        products[1].classList.remove("earbuds");
        products[2].classList.remove("parkas");
        products[3].classList.add("bottles");
    }    
})