export class TouchHandler {
    constructor(tetris) {
      this.tetris = tetris;
    }
  
    handleTouch(event) {
      if (this.tetris.gameOver) return;
  
      const touch = event.touches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;
      const rect = this.tetris.ctx.canvas.getBoundingClientRect();
      const canvasX = touchX - rect.left;
      const canvasY = touchY - rect.top;
  
      const figureTop = this.tetris.currentRow * this.tetris.blockSize;
      const figureBottom = (this.tetris.currentRow + this.tetris.currentFigure.matrix.length) * this.tetris.blockSize;
      const figureLeft = this.tetris.currentCol * this.tetris.blockSize;
      const figureRight = (this.tetris.currentCol + this.tetris.currentFigure.matrix[0].length) * this.tetris.blockSize;
  
      if (canvasY >= figureTop && canvasY <= figureBottom && canvasX >= figureLeft && canvasX <= figureRight) {
        this.tetris.rotateFigure();
      } else if (canvasX < this.tetris.ctx.canvas.width / 2) {
        if (this.tetris.field.isValidMove(this.tetris.currentFigure.matrix, this.tetris.currentRow, this.tetris.currentCol - 1)) {
          this.tetris.currentCol--;
        }
      } else {
        if (this.tetris.field.isValidMove(this.tetris.currentFigure.matrix, this.tetris.currentRow, this.tetris.currentCol + 1)) {
          this.tetris.currentCol++;
        }
      }
  
      this.tetris.field.draw(this.tetris.ctx, this.tetris.blockSize);
      this.tetris.currentFigure.draw(this.tetris.ctx, this.tetris.currentRow, this.tetris.currentCol, this.tetris.blockSize);
    }
  }
  