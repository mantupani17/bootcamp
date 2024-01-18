class MyClass {
    constructor(data){
        this.data = data
    }

    display() {
        console.log(this.data)
    }
}

// inheritance
class Vehicle {
    constructor(){}
    displayVehicleDetail( ) {
        console.log(`It's ${this.wheel} wheeler and model is ${this.model}, color - ${this.color}.`)
    }
}

class FourWheeler extends Vehicle {
    constructor(color, wheel, model) {
        super()
        this.color = color
        this.wheel = wheel
        this.model = model
    }
}

class TwoWheeler extends Vehicle {
    constructor(color, wheel, model) {
        super()
        this.color = color
        this.wheel = wheel
        this.model = model
    }
}

// const mc = new MyClass({name : "mantu"})
// mc.display()
// console.log(mc)
const car = new FourWheeler("Black", 4, "Mercedese")
const bike = new FourWheeler("Blue", 2, "Royal Enfield")
car.displayVehicleDetail()
bike.displayVehicleDetail()