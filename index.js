var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  // The item will be an object with a name and a price
  // Generate a random price between 1 and 100:
  itemPrice = Math.floor(Math.random() * 100) + 1;
  // add the object to the cart
  cart.push( { itemName, itemPrice } );
  // return <itemName> has been added to your cart
  return `${itemName} has been added to your cart`;
}

function viewCart() {
  // Loop over every item in your cart
  // return the contents as one long, coherent statement
  // in this format:
  // "In your cart, you have bananas at $17, pancake batter at $5,
  // and eggs at $49"
  for(let i = 0; i < length(cart))
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
