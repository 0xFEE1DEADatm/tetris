import { GameField } from './gamefield.js';

export class KeyHandler {
  constructor(tetris) {
    this.tetris = tetris;
  }

  handleKeyPress(event) {
    if (this.tetris.gameOver) return;

    switch (event.key) {
      case 'ArrowLeft':
        if (this.tetris.field.isValidMove(this.tetris.currentFigure.matrix, this.tetris.currentRow, this.tetris.currentCol - 1)) {
          this.tetris.currentCol--;
        }
        break;
      case 'ArrowRight':
        if (this.tetris.field.isValidMove(this.tetris.currentFigure.matrix, this.tetris.currentRow, this.tetris.currentCol + 1)) {
          this.tetris.currentCol++;
        }
        break;
      case 'ArrowDown':
        if (this.tetris.field.isValidMove(this.tetris.currentFigure.matrix, this.tetris.currentRow + 1, this.tetris.currentCol)) {
          this.tetris.currentRow++;
        }
        break;
      case 'ArrowUp':
        this.tetris.rotateFigure();
        break;
    }

    this.tetris.field.draw(this.tetris.ctx, this.tetris.blockSize);
    this.tetris.currentFigure.draw(this.tetris.ctx, this.tetris.currentRow, this.tetris.currentCol, this.tetris.blockSize);
  }
}
