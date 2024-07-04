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

// // текущая фигура
// let currentFigure = getCurrentFigure();

// Нахождение случайного целого числа
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
// Задание текущей фигуры
function getcurrentFigure() {
    const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];
  
    let randomNumber = getRandomNumber(0, 7);
    let name = sequence.splice(randomNumber, 1)[0];
    
    console.log(name);
    return name;
}

//добавить проверку была ли предыдущей getcurrentFigure(), если да, то переделать
//getcurrentFigure();


// поворачиваем фигуру на 90 градусов (матрица)
function rotate(matrix) {
    const N = matrix.length - 1;
    const turnedFigure = matrix.map((row, i) =>
      row.map((val, j) => matrix[N - j][i])
    );
    return turnedFigure;
}

// проверяем, вмещается ли фигура в поле
function isValidMove(matrix, row, col) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] && ((col + j < 0) || (col + j >= field[0].length) || (row + i >= field.length) || (field[row + i][col + j]))) {
          return false;
        }
      }
    }
    return true;
}

