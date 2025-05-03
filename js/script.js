// Estraggo gli elementi che mi servono

const elemNum1 = document.getElementById('num1');
const timer = document.getElementById('contatore');
const inputElem1 = document.getElementById('casella1');
const inputElem2 = document.getElementById('casella2');
const inputElem3 = document.getElementById('casella3');
const inputElem4 = document.getElementById('casella4');
const inputElem5 = document.getElementById('casella5');
const buttonStart = document.getElementById('inizia');
const buttonConfirmed = document.getElementById('conferma')
const result = document.getElementById('risultato');
const elemInputPlayer = document.getElementById('inputGiocatore');


const firstNumber = inputElem1.value;
const secondNumber = inputElem2.value;
const thirdNumber = inputElem3.value;
const fourthNumber = inputElem4.value;
const fifthNumber = inputElem5.value;


// Nascondo gli input del giocatore
elemInputPlayer.style.display = "none"
buttonConfirmed.style.display = "none"

// Array di 5 numeri casuali
const randomNumber = []


// Creo evento per la creazioni di 5 numeri casuali
buttonStart.addEventListener('click', startGame)


function startGame(event) {

    // Evito che la pagina faccia refresh
    event.preventDefault();
    console.log("Inizia il gioco")

    // Creo 5 numeri casuali
    
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
            timer.innerHTML = "Scrivi i numeri che ricordi!"
            elemNum1.innerHTML = ""
            elemInputPlayer.style.display = "block"
            buttonConfirmed.style.display = "block"
            buttonStart.style.display = "none"
        } else {
            count--;
            timer.innerHTML = count;
            console.log(count)
        }
    }, 1000);


    elemNum1.innerHTML = randomNumber.join(" ")
    
}




// Creo evento per confronto risposte del giocatore e numeri dati dal gioco


buttonConfirmed.addEventListener('click', endGame)

function endGame(event) {
    // Evito che la pagina faccia refresh
    event.preventDefault();
    console.log("Fine gioco!")

    if ()
}






