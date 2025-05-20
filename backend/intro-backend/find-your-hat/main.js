const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArray) {
    this.field = fieldArray;
    this.currentPosition = { x: 0, y: 0 }; // Initial position
  }

  static generateField(height, width, holePercentage) {
    const totalCells = height * width;
    const holeCount = Math.floor((totalCells * holePercentage) / 100);
    const fieldArray = [];

    // Fill the field with field characters initially
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(fieldCharacter);
      }
      fieldArray.push(row);
    }

    // Place the hat randomly
    const hatPosition = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
    fieldArray[hatPosition.y][hatPosition.x] = hat;

    // Place holes randomly
    for (let i = 0; i < holeCount; i++) {
      let holePosition;
      do {
        holePosition = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height)
        };
      } while (fieldArray[holePosition.y][holePosition.x] !== fieldCharacter);
      fieldArray[holePosition.y][holePosition.x] = hole;
    }

    return fieldArray;
  }

  print() {
    this.field.forEach(row => {
      console.log(row.join(''));
    });
  }

  moveUp() {
    this.currentPosition.y -= 1;
  }

  moveDown() {
    this.currentPosition.y += 1;
  }

  moveLeft() {
    this.currentPosition.x -= 1;
  }

  moveRight() {
    this.currentPosition.x += 1;
  }

  isOutside() {
    const { x, y } = this.currentPosition;
    return x < 0 || y < 0 || y >= this.field.length || x >= this.field[0].length;
  }

  isHatReached() {
    const { x, y } = this.currentPosition;
    return this.field[y][x] === hat;
  }

  isHoleReached() {
    const { x, y } = this.currentPosition;
    return this.field[y][x] === hole;
  }
}

module.exports = Field;
