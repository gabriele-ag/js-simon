// Estraggo gli elementi che mi servono

// Numeri casuali da generare e timer
const elemRandom = document.getElementById('numRandom');
const timer = document.getElementById('contatore');

// InputGiocatore
const inputElem1 = document.getElementById('casella1');
const inputElem2 = document.getElementById('casella2');
const inputElem3 = document.getElementById('casella3');
const inputElem4 = document.getElementById('casella4');
const inputElem5 = document.getElementById('casella5');

// Bottoni
const buttonStart = document.getElementById('inizia');
const buttonReset = document.getElementById('reset')
const buttonConfirmed = document.getElementById('conferma')

// div InputGiocatore da nascondere
const elemInputPlayer = document.getElementById('inputGiocatore');

// Risultato
const result = document.getElementById('risultato');



// Nascondo gli input del giocatore e il bottone Conferma
elemInputPlayer.style.display = "none"
buttonConfirmed.style.display = "none"


// Array di 5 numeri casuali
const randomNumbers = []


// Creo evento per la creazioni di 5 numeri casuali
buttonStart.addEventListener('click', startGame)


function startGame(event) {

    // Evito che la pagina faccia refresh
    event.preventDefault();
    console.log("Inizia il gioco")

    // Creo 5 numeri casuali
    
    for (let i = 0; i < 5; i++) {
       randomNumbers.push(parseInt(Math.floor(Math.random() * 99) + 1))
        console.log(randomNumbers)
    }
    
    
    // Creo il timer

    let count = 30;

    const intervalID = setInterval(function() {
        if (count === 0) {
            clearInterval(intervalID)
            console.log("Tempo scaduto!")
            timer.innerHTML = "Scrivi i numeri che ricordi!"
            elemRandom.innerHTML = ""
            elemInputPlayer.style.display = "block"
            buttonConfirmed.style.display = "block"
            buttonStart.style.display = "none"
        } else {
            count--;
            timer.innerHTML = count;
            console.log(count)
        }
    }, 1000);


    elemRandom.innerHTML = randomNumbers.join(" ")
    
}




// Creo evento per confronto risposte del giocatore e numeri dati dal gioco


buttonConfirmed.addEventListener('click', endGame)

function endGame(event) {
    // Evito che la pagina faccia refresh
    event.preventDefault();
    console.log("Fine gioco!")

    // Preparo gli input del giocatore
    const firstNumber = inputElem1.value;
    const secondNumber = inputElem2.value;
    const thirdNumber = inputElem3.value;
    const fourthNumber = inputElem4.value;
    const fifthNumber = inputElem5.value;

    // Definisco condizione per il gli input del giocatore
    const playerNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber]
    let correct = 0

    for (let i = 0; i < randomNumbers.length; i++) {
        if (playerNumbers.includes(String(randomNumbers[i]))) {
            correct++
        }
    }
    

    // Stampo risultato finale. Vediamo quanto ne ha indovinati il giocatore!
    console.log(`Hai indovinato ${correct} numeri!`)
    result.innerHTML = `Hai indovinato ${correct} numeri!`

}


// Creo Reset del gioco


buttonReset.addEventListener('click', resetGame)

function resetGame(event) {
    event.preventDefault();

    // Resetto il gioco
    inputElem1.value = "";
    inputElem2.value = "";
    inputElem3.value = "";
    inputElem4.value = "";
    inputElem5.value = "";
    result.innerHTML = "";
    elemRandom.innerHTML = "";
    timer.innerHTML = "30";
    elemInputPlayer.style.display = "none";
    buttonConfirmed.style.display = "none";
    buttonStart.style.display = "block";
    randomNumbers.length = 0

}








