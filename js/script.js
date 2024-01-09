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

// Recupero gli elementi dal DOM
const formOddEven = document.getElementById('form-box-oddeven');
const evenCheck = document.getElementById('even');
const oddCheck = document.getElementById('odd');
const numberInput = document.getElementById('number-input');
const betButton = document.getElementById('bet-button');

// Aggancio un evento al form (disattivando il suo comportamento di default)
formOddEven.addEventListener('submit', function (e) {
    e.preventDefault();

    // Recupero il numero inserito dall'utente
    let numberValue = parseInt(numberInput.value);
    console.log(numberValue);
    numberInput.value = '';
})