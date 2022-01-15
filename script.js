/* eslint-disable prettier/prettier */
const gameContainer = document.querySelector('.container');

const createPlayer = (name, mark) => ({
        name,
        mark,
});
const game = () => {
        const gameBoard = ['x', 'o'];
        const player1 = createPlayer('Gandalf', 'X');
        const player2 = createPlayer('Sauron', 'O');
       
        return { gameBoard, player1, player2 };
};


    


