function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.describe = function () {
    return `${this.make} - ${this.model}`
};

function createCar(make, model) {   
    return {
        make,
        model,
        describe : function() {
            return `${this.make} - ${this.model}`
        }
    }
}

const c1 = new Car("Toyota", "Camry");
const c2 = createCar("Honda", "Civic");
console.log(c1.describe());
console.log(c2.describe());
console.log(c1 instanceof Car);
console.log(c2 instanceof Car);