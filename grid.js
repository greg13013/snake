const GRID_SIZE = 21

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

export function getGridSize(){
    return GRID_SIZE
}

export function outsideGrid(position){


    return (
        position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
    )
}

export function getPosOutsideGrid(position){
    let posOutGrid;

    if (position.x < 1) {
        posOutGrid = 'left';
    }

    if (position.x > GRID_SIZE) {
        posOutGrid = 'right';
    }

    if (position.y < 1) {
        posOutGrid = 'top';
    }

    if (position.y > GRID_SIZE) {
        posOutGrid = 'bottom';
    }

    console.log(posOutGrid)

    return posOutGrid
}
