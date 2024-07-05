import { Tetris } from './tetris.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const blockSize = 32;

const tetris = new Tetris(ctx, 20, 10, blockSize);

document.addEventListener('keydown', (event) => tetris.keyHandler.handleKeyPress(event));
canvas.addEventListener('touchstart', (event) => tetris.touchHandler.handleTouch(event));

tetris.start(1000);


// сообщение Game Over
// добавить подсчëт очков
// кнопку перезапуска игры
// добавить ссылку на код 