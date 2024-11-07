// class Transport {
//     constructor(pass) {
//         this.passengersCount = pass
//     }

//     get passengers() {
//         return this.passengersCount
//     }

//     set passengers(pass) {
//         this.passengersCount = pass
//     }

//     move() {
//         console.log("Я еду")
//     }

//     signal() {
//         console.log("Я бибикаю")
//     }
// }

// class Car extends Transport {
//     constructor() {
//         super(5)
//     }
// }

// class Boat extends Transport {
//     constructor(pass) {
//         super(pass)
//     }

//     move() {
//         return "Я хожу по морям"
//     }
// }

// class Train extends Transport {
//     constructor(pass) {
//         super(pass)
//     }
// }

// class Plane extends Transport {
//     constructor(pass) {
//         super(pass)
//     }

//     move() {
//         return "Я летаю"
//     }

//     signal() {
//         console.log(`Моргают ${this.paintLighters()} цвета`)
//     }

//     paintLighters() {
//         return "зеленый и красный"
//     }
// }

// let car = new Car()
// let boat = new Boat(12)
// let train = new Train(120)
// let plane = new Plane(200)

// car.passengers = 8

// console.log(`
// в автомобиле ${car.passengers} пассажиров
// в лодке ${boat.passengers} пассажиров
// в поезде ${train.passengers} пассажиров
// в самолете ${plane.passengers} пассажиров
// `)

