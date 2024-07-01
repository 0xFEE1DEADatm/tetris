// Фигуры
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
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0]
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

// текущая фигура
let currentFigure = getCurrentFigure();

function getCurrentFigure(figures)
{
    var randomIndex = Math.floor(Math.random() * figures.length);
    var randomElement = figures[randomIndex];

    console.log(randomElement);
    return randomElement;
}