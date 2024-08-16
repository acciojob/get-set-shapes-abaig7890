class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value <= 0) {
      throw new Error('Width must be positive');
    }
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      throw new Error('Height must be positive');
    }
    this._height = value;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

// Example usage
const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // Output: 50

const square = new Square(4);
console.log(square.getArea()); // Output: 16
console.log(square.getPerimeter()); // Output: 16