/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const gameContainer = document.querySelector('.container');

const createPlayer = (name, mark) => ({
        name,
        mark,
});
const game = () => {
        const gameBoard = [];
        const player1 = createPlayer('Gandalf', 'x');
        const player2 = createPlayer('Sauron', 'o');
        return { gameBoard, player1, player2,};
};



function checkWin(){
    
}

function makeGrid(){
    for(let i = 0; i < 9; i++){
        let cell = document.createElement('div');
        cell.classList.add('el')
        if(i === 0 || i === 3 || i === 6){
            cell.classList.add('not-left')
        } 
        if(i === 6 || i === 7 || i === 8){
            cell.classList.add('not-bot')
        }
        gameContainer.appendChild(cell)
    }
}
let currentPlayer = game().player1.name
let result = game().gameBoard
gameContainer.addEventListener('click', (e)=>{
    
    if(e.target.className === 'container'){return}
    if(e.target.innerText === 'x' || e.target.innerText === 'o'){return}
    if(currentPlayer === game().player1.name){
        e.target.innerText += game().player1.mark
        result.push(game().player1.mark)
        console.log(result)
        changeTurn()
    }else{
        e.target.innerText += game().player2.mark
        result.push(game().player2.mark)
        console.log(result)
        changeTurn()
    }
})

function changeTurn(){
    if(currentPlayer === game().player1.name){
        currentPlayer = game().player2.name;
    }else {
        currentPlayer = game().player1.name;
    }
}

