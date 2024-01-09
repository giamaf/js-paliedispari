//todo -------------------------- PALINDROMA -------------------------- \\

//* Chiedere all’utente di inserire una parola (con un prompt)
//* Creare una funzione per capire se la parola inserita è palindroma
//* Stampiamo il risultato in console

//! Bonus
//* Raccogliere le informazioni dall'utente usando form, input, button in pagina invece che coi prompt.
//* Stampare i risultati in pagina, invece che in console

//? ---------------------- FUNCTIONS ---------------------- \\

//** Function to verify if word is palindrome
/**
 * @param {string} text Text will be verified
 * @returns {boolean} True/False
 */

function isPalindrome(text) {
    let result = false;
    let originalText = text.toLowerCase();
    let reverseText = text.split('').reverse().join('').toLowerCase();

    if (originalText == reverseText) {
        result = true;
    }
    return result;
}

// Recupero gli elementi dal DOM
const formBox = document.getElementById('form-box');
const textInput = document.getElementById('text-input');
const verifyButton = document.getElementById('verify-button');
const resultElement = document.getElementById('result');

// Imposto un messaggio da stampare in pagina
let message = '';

// Aggancio un evento al form (disattivando il suo comportamento di default)
formBox.addEventListener('submit', function (e) {

    // Disattivo comportamento di default
    e.preventDefault();

    // Recupero la parola inserita dall'utente
    const textValue = textInput.value.trim();
    console.log(textValue);

    //! Validazione
    if (!textValue || !isNaN(textValue)) {
        alert('Dati non validi!');
        return;
    }

    const result = isPalindrome(textValue);

    if (result == true) {
        message = 'La parola è palindroma!';
    } else if (result == false) {
        message = 'La parola NON è palindroma!'
    }

    resultElement.innerText = message;
})


//todo -------------------------- PARI E DISPARI -------------------------- \\

//* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.(con un prompt)
//* Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
//* Sommiamo i due numeri
//* Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
//* Dichiariamo chi ha vinto in console.

//! Bonus
//* Raccogliere le informazioni dall'utente usando form, input, button in pagina invece che coi prompt.
//* Stampare i risultati in pagina, invece che in console

//? ---------------------- FUNCTIONS ---------------------- \\

//** Function to randomize a number between min and max numbers
/**
 * @param {number} min Min number
 * @param {number} max Max number
 * @returns {number} Random number between min and max
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Recupero gli elementi dal DOM
const formOddEven = document.getElementById('form-box-oddeven');
const selectBox = document.getElementById('select-box');
const numberInput = document.getElementById('number-input');
const betButton = document.getElementById('bet-button');
const betResult = document.getElementById('bet-result');

// Aggancio un evento al form (disattivando il suo comportamento di default)
formOddEven.addEventListener('submit', function (e) {
    e.preventDefault();

    // Recupero la scelta dell'utente pari/dispari
    const userChoice = selectBox.value;

    // Recupero il numero scelto dall'utente
    const numberValue = numberInput.value;

    //! Validazione dei campi
    if (numberValue < 1 || numberValue > 5 || isNaN(numberValue)) {
        alert('Dati non validi!');
        numberInput.value = '';
        return;
    }

    if (userChoice === 'odd' && numberValue % 2 === 0) {
        alert('Devi inserire un numero dispari!');
        numberInput.value = '';
        return;
    } else if (userChoice === 'even' && !numberValue % 2 === 0) {
        alert('Devi inserire un numero pari!');
        numberInput.value = '';
        return;
    }
})
