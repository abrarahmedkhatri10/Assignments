"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacturer, model, ...args) {
    const car = {
        manufacturer,
        model,
    };
    for (const arg of args) {
        const [key, value] = Object.entries(arg)[0];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
let carInfo = create_car("Toyota", "Camry", { color: "Black", year: 2022, features: ["Navigation", "Sunroof"] });
// Print the object to check if all the information was stored correctly
console.log(carInfo);
