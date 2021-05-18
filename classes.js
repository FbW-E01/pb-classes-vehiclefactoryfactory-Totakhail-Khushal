// # Vehicle Factory Factory

// Create "factory factory" function that returns a constructor function.

// The factory factory takes in one parameter, "type".

// Each created factory needs to create objects with this given type.

// Each created factory needs to take in three parameters and save them to the created objects:
// - make
//     - model

// Use your factory factory to create at least five factories, such as
// - bicycle factory
// - car factory
// - boat factory
// - blimp factory
// - train factory

// Lastly, use those factories to create some vehicles.

// Store all your created vehicles inside one array, loop over that array and print out each vehicle.

//     Question: Check the * type * of your factories and of the objects that your factories create - what is the type of a factory and what is the type of a created object ? Add your answer as comments into into your solution file.

function Factory(typeOfFactory) {
    // this.type = type;
    // this.model = model;
    // this.year = year;
    return function (make, model, year, type = typeOfFactory) {
        this.type = type;
        this.model = model;
        this.year = year;
        this.make = make;
    }
}
const carFactory = Factory("Car");
const bicycleFactory = Factory("bicycle");
const boatFactory = Factory("boat");
const blimpFactory = Factory("blimp");
const trainFactory = Factory("train");
const garage = [];


garage.push(new carFactory("toyota", "Landcruser", 2020))
garage.push(new bicycleFactory("Mountainbike", "hello", 1999))
garage.push(new boatFactory("this", "Mitsubishi", "2011"))
garage.push(new blimpFactory("Hello", "blimp", "2011"))
garage.push(new trainFactory("Train", "Mitsubishi", "2011"))

for (items in garage) {
    console.log(garage[items]);
}

console.log(garage); // 
console.log(typeof garage[0])  // type of factories are objects

// console.log(carFactory);
