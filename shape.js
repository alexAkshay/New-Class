export default class Shape {
    constructor(color) {
        this.color = color;
    }

    drawShape() {
        console.log(`${this.color} is colored`);

    }
    calculateArea() {
        console.log(`${this.color}  area is to be calculated`)
    }

}