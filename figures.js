export class Figure {
    constructor(name, matrix) {
      this.name = name;
      this.matrix = matrix;
    }
  
    static getRandomFigure() {
      const figures = {
        'I': [
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,0,0]
        ],
        'J': [
            [0,0,0,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,1,1,0]
        ],
        'L': [
            [0,0,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,1,1,0]
        ],
        'O': [
            [1,1],
            [1,1]
        ],
        'S': [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [1,1,0,0]
        ],
        'Z': [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,0,1,1]
        ],
        'T': [
            [0,0,0,0],
            [0,0,0,0],
            [1,1,1,0],
            [0,1,0,0]
        ]
      };
  
      const names = Object.keys(figures);
      const randomName = names[Math.floor(Math.random() * names.length)];
      return new Figure(randomName, figures[randomName]);
    }
  
    rotate() {
      const N = this.matrix.length - 1;
      const turnedFigure = this.matrix.map((row, i) =>
        row.map((val, j) => this.matrix[N - j][i]));
      return new Figure(this.name, turnedFigure);
    }
  
    draw(ctx, row, col, blockSize) {
      ctx.fillStyle = 'hsl(0, 0%, 5%)';
      for (let i = 0; i < this.matrix.length; i++) {
        for (let j = 0; j < this.matrix[i].length; j++) {
          if (this.matrix[i][j]) {
            ctx.fillRect((col + j) * blockSize, (row + i) * blockSize, blockSize - 1, blockSize - 1);
          }
        }
      }
    }
  }
  
  