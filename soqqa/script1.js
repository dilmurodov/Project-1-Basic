'use strict';

let [score1, score2] = (() => [document.querySelector('#score--0'), document.querySelector('#score--1')])();
let [current1, current2] = (() => [document.querySelector('#current--0'), document.querySelector('#current--1')])();
let imgDice = document.querySelector('.dice');
let player1 = document.querySelector('.player--0')
let player2 = document.querySelector('.player--1')

const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')

let current1TextContent = +current1.textContent;
let current2TextContent = +current2.textContent;

let score1TextContent = +score1.textContent;
let score2TextContent = +score2.textContent;

let player = 1;

const diceHold = () => {

    let hold = false;
    let score = 0;

    btnRoll.addEventListener('click', (event) => {
        let dice = Math.trunc(Math.random() * 6) + 1;

        console.log(dice)
        imgDice.src = `dice-${dice}.png`

        if (player === 1)
            current1.textContent = dice;
        else current2.textContent = dice;

        if (dice === 1) {
            player2.classList.toggle('player--active')
            player1.classList.toggle('player--active')
            player === 1 ? player = 2 : player = 1;
            dice = 0;
            score = 0;
        }
        score += dice;
        console.log("SummScores =>", score)
        console.log("dice =>", dice)
    })

    btnHold.addEventListener('click', (e) => {
        console.log("hold")
        console.log("Player", player)
        hold = true;
        console.log("hold => ", hold)
        if (hold) {
            if (player === 1) {
                player1.classList.toggle('player--active')
                player2.classList.toggle('player--active')
                score1.textContent = score1TextContent + score;
                score1TextContent += score;
                if (score1TextContent >= 30) {
                    player1.classList.add('player--winner');
                    btnHold.disabled = true;
                    btnRoll.disabled = true;
                }
                player === 1 ? player = 2 : player = 1;
                score = 0;
            }
            else {
                player2.classList.toggle('player--active')
                player1.classList.toggle('player--active')
                score2.textContent = score2TextContent + score;
                score2TextContent += score;
                if (score2TextContent >= 30) {
                    player2.classList.add('player--winner');
                    btnHold.disabled = true;
                    btnRoll.disabled = true;
                }
                player === 1 ? player = 2 : player = 1;
                score = 0;
            }
        }
        else if (dice === 1) {
            player2.classList.toggle('player--active')
            player1.classList.toggle('player--active')
            player === 1 ? player = 2 : player = 1;
            score = 0;
        }
    })

};

const newGame = () => {
    btnNew.addEventListener('click', (event) => {
        player1.classList.remove('player--winner')
        player2.classList.remove('player--winner')
        btnHold.disabled = false;
        btnRoll.disabled = false;
        current1.textContent = 0;
        current2.textContent = 0;
        current1TextContent = 0;
        current2TextContent = 0;
        score1.textContent = 0;
        score2.textContent = 0;
        score1TextContent = 0;
        score2TextContent = 0;
        player = 1;
        player2.classList.remove('player--active')
        player1.classList.remove('player--active')
        if(player === 1){
            player1.classList.add('player--active')
        } else{
            player2.classList.add('player--active')
        }
    })
}

diceHold();
newGame();
