/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const gameContainer = document.querySelector('.container');

const createPlayer = (name, mark) => ({
        name,
        mark,
});
const game = () => {
        const gameBoard = ['', '', '', '', '', '', '', '', ''];
        const player1 = createPlayer('Gandalf', 'x');
        const player2 = createPlayer('Sauron', 'o');
        return { gameBoard, player1, player2,};
};

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let currentPlayer = game().player1.mark
const result = game().gameBoard

function checkWin() {
    return winCombinations.find(combination =>{
    return combination.every((index)=> result[index] === currentPlayer)
    }) || false;
}
function isDraw(){
    return result.every(el => {
        return el === 'x' || el === 'o'
    })
}    


function makeGrid(){
    for(let i = 0; i < 9; i++){
        let cell = document.createElement('div');
        cell.classList.add('el')
        cell.setAttribute('id', i)
        if(i === 0 || i === 3 || i === 6){
            cell.classList.add('not-left')
        } 
        if(i === 6 || i === 7 || i === 8){
            cell.classList.add('not-bot')
        }
        gameContainer.appendChild(cell)
    }
}

function changeTurn(){
    if(currentPlayer === game().player1.mark){
        currentPlayer = game().player2.mark;
    }else {
        currentPlayer = game().player1.mark;
    }
}

gameContainer.addEventListener('click', (e)=>{
    
    const index = e.target.id
    if(e.target.className === 'container'){return}
    if(e.target.innerText === 'x' || e.target.innerText === 'o'){return}
    if(currentPlayer === game().player1.mark){
        e.target.innerText += game().player1.mark
        result[index] = game().player1.mark
        console.log(checkWin())
        console.log(result)
        
    }else{
        e.target.innerText += game().player2.mark
        result[index] = game().player2.mark
        console.log(checkWin())
    }
})

makeGrid()

