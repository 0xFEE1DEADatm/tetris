export class GameOver {
    constructor(tetris) {
      this.tetris = tetris;
      this.blinkState = false;
      this.spiralIndex = 0;
    }
  
    showGameOver() {
      setTimeout(() => {
        this.spiralField();
      }, 3000);
    }
  
    spiralField() {
      this.spiralIndex = 0;
      this.spiralPath = this.getSpiralPath();
      this.spiralInterval = setInterval(() => {
        this.fillNextSpiralBlock();
      }, 20);
    }
  
    fillNextSpiralBlock() {
      if (this.spiralIndex >= this.spiralPath.length) {
        clearInterval(this.spiralInterval);
        return;
      }
      const [row, col] = this.spiralPath[this.spiralIndex];
      this.tetris.field.field[row][col] = 1;
      this.tetris.field.draw(this.tetris.ctx, this.tetris.blockSize);
      this.spiralIndex++;
    }
  
    getSpiralPath() {
      const path = [];
      let left = 0, right = this.tetris.field.cols - 1, top = 0, bottom = this.tetris.field.rows - 1;
  
      while (left <= right && top <= bottom) {
        for (let col = left; col <= right; col++) {
          path.push([top, col]);
        }
        top++;
        for (let row = top; row <= bottom; row++) {
          path.push([row, right]);
        }
        right--;
        if (top <= bottom) {
          for (let col = right; col >= left; col--) {
            path.push([bottom, col]);
          }
          bottom--;
        }
        if (left <= right) {
          for (let row = bottom; row >= top; row--) {
            path.push([row, left]);
          }
          left++;
        }
      }
      return path;
    }
  }
  