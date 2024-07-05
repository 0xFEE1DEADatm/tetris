import { Figure } from './figures.js';
import { GameField } from './gamefield.js';
import { GameOver } from './gameover.js';
import { Score } from './score.js';

import { TouchHandler } from './handlers/touchhandler.js';
import { KeyHandler } from './handlers/keyhandler.js';


export class Tetris {
  constructor(ctx, rows, cols, blockSize) {
    this.ctx = ctx;
    this.blockSize = blockSize;
    this.field = new GameField(rows, cols);

    this.currentFigure = Figure.getRandomFigure();
    this.nextFigure = Figure.getRandomFigure();

    this.startCol = Math.floor(cols / 2) - 1;
    this.currentRow = -3;
    this.currentCol = this.startCol;

    this.gameOver = false;

    this.gameOverHandler = new GameOver(this);
    this.touchHandler = new TouchHandler(this);
    this.keyHandler = new KeyHandler(this);
    this.score = new Score(rows, cols);
  }

  updateGame() {
    if (this.gameOver) {
      return;
    }

    if (this.field.isValidMove(this.currentFigure.matrix, this.currentRow + 1, this.currentCol)) {
      this.currentRow++;
    } else {
      for (let i = 0; i < this.currentFigure.matrix.length; i++) {
        for (let j = 0; j < this.currentFigure.matrix[i].length; j++) {
          if (this.currentFigure.matrix[i][j]) {
            if (this.currentRow + i < 0) {
              this.gameOver = true;
              this.gameOverHandler.showGameOver();
              return;
            }
            this.field.field[this.currentRow + i][this.currentCol + j] = 1;
          }
        }
      }
      this.currentFigure = this.nextFigure;
      this.nextFigure = Figure.getRandomFigure();
      this.currentRow = -this.currentFigure.matrix.length;
      this.currentCol = this.startCol;
      
      if (!this.field.isValidMove(this.currentFigure.matrix, this.currentRow, this.currentCol)) {
        this.gameOver = true;
        this.gameOverHandler.showGameOver(); 
        return;
      }

      
      const linesCleared = this.field.getFilledRows();
      this.score.addPoints(linesCleared.length);
      this.field.deleteFilledRows();
    }

    this.field.draw(this.ctx, this.blockSize);
    this.currentFigure.draw(this.ctx, this.currentRow, this.currentCol, this.blockSize);
  }

  rotateFigure() {
    let rotatedFigure = this.currentFigure.rotate();
    let offset = 0;

    while (!this.field.isValidMove(rotatedFigure.matrix, this.currentRow, this.currentCol + offset)) {
      if (offset > 0) {
        offset = -offset;
      } else {
        offset = -offset + 1;
      }
      if (Math.abs(offset) > this.currentFigure.matrix[0].length) {
        return;
      }
    }

    if (this.field.isValidMove(rotatedFigure.matrix, this.currentRow, this.currentCol + offset)) {
      this.currentFigure = rotatedFigure;
      this.currentCol += offset;
    }
  }

  clear(ctx) {
    this.field.clear(this.ctx);
  }

  start(interval) {
    this.gameInterval = setInterval(this.updateGame.bind(this), interval);
  }

  stop() {
    clearInterval(this.gameInterval);
    this.gameOverHandler.stopSpiral();
  }
}
