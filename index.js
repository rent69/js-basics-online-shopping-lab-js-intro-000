
// Define a global variable (use `var` at the top level) called `cart`.
//Initialize it as an empty array.

var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

//+ Define a function `getCart` that takes no arguments and returns the `cart`.

function getCart() {
  return cart
}

//Define a function `addToCart`. This function should accept one argument, the item the user wants to purchase.
//    This function should automatically set a price for this item by generating a random number between 0 and 100.
var price = Math.floor(Math.random() * 100)
function addToCart(item) {
   cart.push({ [item]: price})
  console.log(`${item} has been added to your cart.`);

  return cart
}

//Define a function `viewCart` which does not accept any arguments. This function should
//loop over every item in `cart` to print out `"In your cart you have [item and price pairs]."`.
//If there isn't anything in your cart, the function should print out `"Your shopping cart is empty."`.

function viewCart() {
    if (cart.length < 1) {
     console.log('Your shopping cart is empty.');
  }
  else {
  //  var itemAndPrice = []
// cart.forEach(function (item, price) {

 for (var itemAndPrice in viewCart) {
  itemAndPrice.push(` ${viewCart[itemAndPrice]} at ${itemAndPrice}`)
};

}
console.log(`In your cart, you have${itemAndPrice.join(',')}`)
}
