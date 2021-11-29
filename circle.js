import Shape from "./shape.js";

export class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    calculateArea() {
        console.log(`${this.color}  area is calculated`)

    }
}

var square = new Circle("red");
square.calculateArea();