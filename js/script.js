// Estraggo gli elementi che mi servono

const elemNum1 = document.getElementById('num1');
const timer = document.getElementById('contatore');
const inputElem1 = document.getElementById('casella1');
const inputElem2 = document.getElementById('casella2');
const inputElem3 = document.getElementById('casella3');
const inputElem4 = document.getElementById('casella4');
const inputElem5 = document.getElementById('casella5');
const button = document.getElementById('inizia');
const result = document.getElementById('risultato');


const playerNumber1 = inputElem1.value;
const playerNumber2 = inputElem2.value;
const playerNumber3 = inputElem3.value;
const playerNumber4 = inputElem4.value;
const playerNumber5 = inputElem5.value;


// Definisco array di 5 num casuali
button.addEventListener('click', startGame)


function startGame(event) {

    // Evito che la pagina faccia refresh
    event.preventDefault();
    console.log("Inizia il gioco")

    const tempo = timer.value

    // Creo 5 numeri casuali
    const randomNumber = []
    
    for (let i = 0; i < 5; i++) {
       randomNumber.push(parseInt(Math.floor(Math.random() * 99) + 1))
        console.log(randomNumber)
    }


    // Creo il timer

    let count = 30;

    const intervalID = setInterval(function() {
        if (count === 0) {
            clearInterval(intervalID)
            console.log("Tempo scaduto!")
        } else {
            count--;
            console.log(count)
        }
    }, 1000);

    // let count = 30;

    // const intervalId = setInterval(function () {
    // if (count === 0) {
    // console.log("Buon Anno!!!");
    // clearInterval(intervalId);
    // } else {
    // console.log(count);
    // count--;
    // }
    // }, 1000);
    timer.innerHTML = intervalID
    elemNum1.innerHTML = randomNumber
    elemNum1.reset
    timer.reset
    
}