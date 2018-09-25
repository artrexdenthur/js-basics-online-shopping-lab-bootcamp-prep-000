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
  let statement = `In your cart, you have `;
  if(cart.length < 1) {
    return "Your shopping cart is empty."
  } else {
    statement = statement + `${cart[0].itemName} at $${cart[0].itemPrice}`
    for(let i = 0; i < cart.length; i++) {
      statement = statement + blue
    }
    
  }
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
