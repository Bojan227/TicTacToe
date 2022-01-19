/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const gameContainer = document.querySelector('.container');
const gridContainer = document.querySelector('.gridContainer')
const playButton = document.querySelector('.playButton')
const createPlayer = (name, mark) => ({
        name,
        mark,
});
const game = () => {
    const input1 = document.querySelector('.player1').value
    const input2 = document.querySelector('.player2').value
        const gameBoard = ['', '', '', '', '', '', '', '', ''];
        const player1 = createPlayer(input1, 'x');
        const player2 = createPlayer(input2, 'o');
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
function isDraw(){
    return result.every(el => el === 'x' || el === 'o')
}  
function changeTurn(){
    if(currentPlayer === game().player1.mark){
        currentPlayer = game().player2.mark;
    }else {
        currentPlayer = game().player1.mark;
    }
}
function checkWin() {
     
     let condition = ''
     // eslint-disable-next-line array-callback-return
    winCombinations.find((combination) => {
          condition = combination.every(index => result[index] === currentPlayer) || false;
          return condition
         })
        if(condition === true){
            console.log('You win')
        }else if(isDraw()){
            console.log('Game draw')
        }else{
            changeTurn()
        }
}
  


function makeGrid(){
    const names = document.createElement('div') 
    names.classList.add('names')  
    const h1 = document.createElement('h2')
    const h2 = document.createElement('h2')
    h1.classList.add('play1')
    h2.classList.add('play2')
    h1.textContent = game().player1.name
    h2.textContent = game().player2.name
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i < 9; i++){
        
        const cell = document.createElement('div');
        cell.classList.add('el')
        cell.setAttribute('id', i)
        if(i === 0 || i === 3 || i === 6){
            cell.classList.add('not-left')
        } 
        if(i === 6 || i === 7 || i === 8){
            cell.classList.add('not-bot')
        }
        
        gridContainer.appendChild(cell)
        names.append(h1, h2)
        gameContainer.insertAdjacentElement('beforeend', names)
    }
}



function start(){
    const startScreen = document.querySelector('.startScreen')
    makeGrid()
    startScreen.classList.add('no-display')

}

gridContainer.addEventListener('click', (e)=>{
    const index = e.target.id
    if(e.target.className === 'container' || e.target.className === 'gridContainer'){return}
    if(e.target.innerText === 'x' || e.target.innerText === 'o'){return}
    if(currentPlayer === game().player1.mark){
        e.target.innerText += game().player1.mark
        result[index] = game().player1.mark
        checkWin()
        
    }else{
        e.target.innerText += game().player2.mark
        result[index] = game().player2.mark
        checkWin()
    } 
});

playButton.addEventListener('click', start);
