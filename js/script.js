console.log('JS OK');

//? FUNCTIONS

//** Function to verify if word is palindrome
/**
 * @param {string} text Text will be verified
 * @returns {boolean} True/False
 */

function isPalindrome(text) {
    let result = false;
    const originalText = text;
    const reverseText = text.split('').reverse().join('');

    if (originalText == reverseText) {
        result = true;
    }
    return result;
}


//todo -------------------------- PALINDROMA -------------------------- \\

//* Chiedere all’utente di inserire una parola (con un prompt)
//* Creare una funzione per capire se la parola inserita è palindroma
//* Stampiamo il risultato in console

//! Bonus
//* Raccogliere le informazioni dall'utente usando form, input, button in pagina invece che coi prompt.
//* Stampare i risultati in pagina, invece che in console

// Recupero gli elementi dal DOM
const formBox = document.getElementById('form-box');
const textInput = document.getElementById('text-input');
const verifyButton = document.getElementById('verify-button');
const result = document.getElementById('result');

// Focus sull'area testo del form
textInput.focus();

// Imposto un messaggio da stampare in pagina
let message = 'La parola NON è palindroma!';

// Aggancio un evento al form (disattivando il suo comportamento di default)
formBox.addEventListener('submit', function (e) {

    // Disattivo comportamento di default
    e.preventDefault();

    // Recupero la parola inserita dall'utente
    const textValue = textInput.value.trim();
    console.log(textValue);
    //! Valdiazione
    if (!textValue || !isNaN(textValue)) {
        alert('Dati non validi!');
        return;
    }

    isPalindrome(textValue);

    if (isPalindrome == true) {
        message = 'La parola è palindroma!';
    }

    result.innerText = message;
})