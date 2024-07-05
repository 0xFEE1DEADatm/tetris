import { GameField } from './gamefield.js';

export class Score {
    constructor(rows, cols) {
      this.score = 0;
      this.scoreElement = document.getElementById('score');
      this.updateScoreDisplay();
      this.deletedRows = new GameField(rows, cols);
    }
  
    addPoints(lines) {
      if (this.deletedRows.getFilledRows()) {
        this.score += lines*100;
        this.updateScoreDisplay();
      }
    }
  
    reset() {
      this.score = 0;
      this.updateScoreDisplay();
    }
  
    updateScoreDisplay() {
      if (this.scoreElement) {
        this.scoreElement.textContent = `Score: ${this.score}`;
      }
    }
  }
