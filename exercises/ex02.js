// Create a function called groceryCheckout which processes a queue of customers
// Each customer has a cart (array of items with a name and price).
// Remove customers whose total cost is less than or equal to $50 from the queue.
// Make sure to implement FIFO (First-In, First-Out)

const Queue = require('../lib/Queue')

function groceryCheckout(queue) {
  // your code here
  const size = queue.items.length; //initial size of the queue

  //Dequeue first customer
  for(let i=0; i < size; i++){
    const customer = queue.dequeue(); //dequeue first customer

    //total cost of the cart
    const totalCost = customer.cart.reduce((acc, item) => acc + item.price, 0);

    //remove customer with cart > $50
    if(totalCost > 50){
      queue.enqueue(customer); //only customers with car > $50
    }
    
  }
}

const customers = new Queue();
customers.enqueue({ name: "Alice", cart: [{ item: "Milk", price: 10 }, { item: "Bread", price: 5 }] });
customers.enqueue({ name: "Bob", cart: [{ item: "Laptop", price: 500 }, { item: "Mouse", price: 20 }] });
customers.enqueue({ name: "Charlie", cart: [{ item: "Candy", price: 2 }, { item: "Juice", price: 3 }] });

groceryCheckout(customers);
console.log(customers.printQueue());
// Expected output:
// { name: "Bob", cart: [{ item: "Laptop", price: 500 }, { item: "Mouse", price: 20 }] ] }
