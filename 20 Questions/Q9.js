class Order {
  static count = 0;
  #id;

  constructor() {
    this.#id = Order.count;
    Order.count++;
  }

  getId() {
    return this.#id;
  }

  static getCount() {
    return this.count;
  }
}

const o1 = new Order();
const o2 = new Order();
console.log(o1.getId());
console.log(o2.getId());
console.log(Order.getCount());