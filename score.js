export class Score {
    constructor() {
      this.score = 0;
      this.scoreElement = document.getElementById('score');
      this.updateScoreDisplay();
    }
  
    addPoints(points) {
      this.score += points;
      this.updateScoreDisplay();
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
  