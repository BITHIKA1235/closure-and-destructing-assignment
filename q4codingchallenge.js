const cart=shoppingCart();
console.log(`cart items:`,cart.getCartItems());
const product1={id:1,name:"Product1",price:10};
const product2={id:1,name:"Product2",price:20};
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);
onsole.log(`cart items:`,cart.getCartItems());