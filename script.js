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
        const player1 = createPlayer('Gandalf', 'X');
        const player2 = createPlayer('Sauron', 'O');
        return { gameBoard, player1, player2,};
};

const result = game().gameBoard;
gameContainer.addEventListener('click', (e)=>{
    if(e.target.innerText === 'x'){
        console.log(e.target.innerText)
        result.pop()
        result.push(e.target.innerText)
    }else{
        console.log(e.target.innerText)
        result.pop()
        result.push(e.target.innerText)
    }
})
function display(){
    
    result.forEach(val => {
        const h1 = document.createElement('h1');
        h1.textContent = val;
        gameContainer.appendChild(h1)
    })
}

