
let message = document.querySelector('.message')

const check = document.querySelector(".check")
const body = document.querySelector('body')
const suroq = document.querySelector('.number')
let ball = document.querySelector('.score')
let haighScore = document.querySelector('.highscore')
const again = document.querySelector('.again')

let globalmessage = message.textContent
let Globalbody = body.style
let Globalsuroq = suroq.textContent
let GlobalBall = ball.textContent
let GlobalheaighScore = haighScore.textContent


let num = Math.trunc(Math.random() * 20) + 1;


check.addEventListener('click', () => {
    console.log(num)

    const input = +document.querySelector('.guess').value;
    console.log(input, num)

    if (input < num) {
        message.textContent = 'Pastlab kiritdiz';
        +ball.textContent--;
    }
    else if (input > num) {
        message.textContent = "Balandlab ketdiz";
        +ball.textContent--;
    }
    else {
        message.textContent = "tug\'ri topdiz! Urree"
        body.style.backgroundColor = 'green'
        suroq.textContent = `${num}`
        haighScore.textContent = `${+ball.textContent}`
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'enter') {
        console.log(num)

        const input = +document.querySelector('.guess').value;
        console.log(input, num)

        if (input < num) {
            message.textContent = 'Pastlab kiritdiz';
            +ball.textContent--;
        }
        else if (input > num) {
            message.textContent = "Balandlab ketdiz";
            +ball.textContent--;
        }
        else {
            message.textContent = "tug\'ri topdiz! Urree"
            body.style.backgroundColor = 'green'
            suroq.textContent = `${num}`
            haighScore.textContent = `${+ball.textContent}`
        }
    }
})

again.addEventListener('click', () => {
    num = Math.trunc(Math.random() * 20) + 1;
    console.log(num)
    message.textContent = globalmessage,
        haighScore.textContent = ball.textContent,
        ball.textContent = GlobalBall
    body.style = Globalbody
    suroq.textContent = Globalsuroq
    document.querySelector('.guess').value = '';
})
