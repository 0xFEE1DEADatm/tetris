export class GameField {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.field = Array(rows).fill(0).map(() => Array(cols).fill(0));
    }
  
    isValidMove(matrix, row, col) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] && (
            col + j < 0 || 
            col + j >= this.cols || 
            row + i >= this.rows || 
            (row + i >= 0 && this.field[row + i][col + j])
          )) {
            return false;
          }
        }
      }
      return true;
    }
    
    deleteFilledRows() {
      let victoryRows = this.getFilledRows();
      for (let row of victoryRows) {
        this.field.splice(row, 1);
        this.field.unshift(new Array(this.cols).fill(0));
      }
      return victoryRows;
    }
  
    getFilledRows() {
      let victoryRows = [];
      for (let i = 0; i < this.field.length; i++) {
        if (this.field[i].every(cell => cell !== 0)) {
          victoryRows.push(i);
        }
      }
      return victoryRows;
    }
  
    draw(ctx, blockSize) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = 'hsl(0, 0%, 5%)';
      for (let i = 0; i < this.field.length; i++) {
        for (let j = 0; j < this.field[i].length; j++) {
          if (this.field[i][j]) {
            ctx.fillRect(j * blockSize, i * blockSize, blockSize - 1, blockSize - 1);
          }
        }
      }
    }

    clear(ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
  }