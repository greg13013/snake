import { getGridSize, getPosOutsideGrid, outsideGrid } from "./grid.js";
import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5
let snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export function update() {
    // console.log('update snake');
    addSegments()
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // console.log(outsideGrid(getSnakeHead()));


    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

    let posSnakeOutsideGrid = getPosOutsideGrid(getSnakeHead())
    console.log(snakeBody[0]);


    switch (posSnakeOutsideGrid) {
        case 'bottom':
            snakeBody[0].y = 0
            break;
        case 'top':
            snakeBody[0].y = getGridSize();
            break;
        case 'right':
            snakeBody[0].x = 0
            break;
        case 'left':
            snakeBody[0].x = getGridSize();
            break;
    }

    
}


export function draw(gameBoard) {
    // console.log('draw snake');
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
    // console.log(getSnakeHead().x)
}

export function setSnakePos(newX, newY) {
    snakeBody = [{ x: newX, y: newY }];
}

export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y

}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0;
}