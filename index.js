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
    for(let i = 1; i < cart.length; i++) {
      if(i < cart.length) {
        statement = `${statement}, ${cart[i].itemName} at $${cart[i].itemPrice}`  
      } else {
        statement = `${statement}, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
  }
}

function total() {
  // iterate through the cart and return
  // the total value of the items therein
  let total = 0;
  for(let item of cart) {
    total += item.itemPrice;
  }
  return total;
}

function removeFromCart(removeName) {
  // write your code here
  let removed = false;
  for(let item of cart) {
    if(item.itemName === itemName) {
      let index = cart.indexOf(item);
      cart.splice(index, 1);
      removed = true;
    }
  }
  if(removed === false) {
    return "That item is not in your cart.";
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  // check for no argument
  if placeOrder.arguments.length == 0
}
