import { Tetris } from './src/tetris.js';
import { KeyHandler } from './src/handlers/keyhandler.js';
import { TouchHandler } from './src/handlers/touchhandler.js';

const canvas = document.getElementById('game-canvas');
const restart = document.getElementById('restart-button');

const ctx = canvas.getContext('2d');
const blockSize = 32;

const tetris = new Tetris(ctx, 20, 10, blockSize);

const keyHandler = new KeyHandler(tetris);
const touchHandler = new TouchHandler(tetris);

document.addEventListener('keydown', (event) => keyHandler.handleKeyPress(event));
canvas.addEventListener('touchstart', (event) => touchHandler.handleTouch(event));

restart.addEventListener('click', (event) => {
    tetris.stop(500);
    tetris.clear(ctx);
    tetris.start(500);
});
tetris.start(1000);
