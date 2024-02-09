class Pizza {
    // Constructor method is called when a new Pizza object is created.
    constructor(pizzaType, pizzaSize) {
        // Properties (characteristics) of the Pizza object.
        this.type = pizzaType;   // Type of pizza (e.g., pepperoni).
        this.size = pizzaSize;   // Size of pizza (e.g., small).
        this.crust = "original"; // Default crust type.
        this.topping = [];       // An array to store pizza toppings.
    }

    // Getter method for retrieving the value of the pizzaCrust property.
    get pizzaCrust() {
        return this.crust;
    }

    // Setter method for setting the value of the pizzaCrust property.
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    // Method to simulate baking the pizza.
    bake() {
        console.log(
            `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
        );
    }
}

// Creating an instance (object) of the Pizza class.
const myPizza = new Pizza("pepperoni", "small");

// Using the setter to change the crust type.
myPizza.pizzaCrust = "thin";

// Calling the bake method to simulate baking the pizza.
myPizza.bake();

// Retrieving and printing the current crust type using the getter.
console.log(myPizza.pizzaCrust); // Output: thin
