let score = 0;
const spanScore = document.getElementById('score');

spanScore.innerHTML = score;

export function scoreUp(){
    score += 1;
    spanScore.innerHTML = score;
}