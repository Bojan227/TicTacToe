/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const gameFlow = (()=>{

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
    const gridContainer = document.querySelector('.gridContainer')
    const playButton = document.querySelector('.playButton')
    // eslint-disable-next-line prefer-const
    let currentPlayer = game().player1.mark
    let result = game().gameBoard

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
    
    function isDraw(){
        return result.every(el => el === 'x' || el === 'o')
    }  
    function changeTurn(){
        const player1 = document.querySelector('.play1')
        const player2 = document.querySelector('.play2')
        if(currentPlayer === game().player1.mark){
            currentPlayer = game().player2.mark;
            player1.classList.add('names')
            player2.classList.remove('names')

        }else {
            currentPlayer = game().player1.mark;
            player2.classList.add('names')
            player1.classList.remove('names')
        }
    }
    
    function resetBoard(){
        const remove = document.querySelector('.end')
        const cells = document.querySelectorAll('.el')
        cells.forEach(cell => cell.classList.remove('x'))
        cells.forEach(cell => cell.classList.remove('circle'))
        result = game().gameBoard
        remove.classList.add('none')
        remove.classList.remove('end')
    }
    
    function newGame(){
        const startScreen = document.querySelector('.startScreen')
        const remove = document.querySelector('.end')
        const player1 = document.querySelector('.play1')
        const player2 = document.querySelector('.play2')
        const input1 = document.querySelector('.player1')
        const input2 = document.querySelector('.player2')
        input1.value = ''
        input2.value = ''
        player1.remove()
        player2.remove()
        startScreen.classList.remove('no-display')
        gridContainer.textContent = ''
        remove.classList.add('none')
        remove.classList.remove('end')
        result = game().gameBoard
        }
    function endGame(){
        const end = document.querySelector('.none')
        const winningMessage = document.querySelector('.winningMessage')
        const resetButton = document.querySelector('.reset')
        const startNew = document.querySelector('.startNew')
        if(!isDraw() && currentPlayer !== game().player1.mark){
            winningMessage.textContent = `${game().player2.name} won the game`
        }else if(!isDraw() && currentPlayer !== game().player2.mark){
            winningMessage.textContent = `${game().player1.name} won the game`
        }else{
            winningMessage.textContent = "It's a Draw"
        }
        startNew.addEventListener('click', newGame)
        resetButton.addEventListener('click', resetBoard)
        end.classList.remove('none')
        end.classList.add('end')
        
    }
    function checkWin() {
         let condition = ''
         // eslint-disable-next-line array-callback-return
        winCombinations.find((combination) => {
              condition = combination.every(index => result[index] === currentPlayer) || false;
              return condition
             })
            if(condition === true){
               endGame()
            }else if(isDraw()){
                endGame()
            }else{
                changeTurn()
            }
    }
    function makeGrid(){
        const gameContainer = document.querySelector('.container');
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
            gameContainer.insertAdjacentElement('afterbegin', h1)
            gameContainer.insertAdjacentElement('beforeend', h2)
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
        if(e.target.classList.contains('x') || e.target.classList.contains('circle')){return}
        if(currentPlayer === game().player1.mark){
            e.target.classList.add('x')
            result[index] = game().player1.mark
            checkWin()
            
        }else{
            e.target.classList.add('circle')
            result[index] = game().player2.mark
            checkWin()
        } 
    });
    
    playButton.addEventListener('click', start);
    
})();
