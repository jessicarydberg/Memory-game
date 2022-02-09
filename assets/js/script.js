/**
 * Get the image and button elements and add eventlisteners
 */

document.addEventListener("DOMContentLoaded", function() {
    let cards = document.getElementsByTagName("img");
    let button = document.getElementsByTagName("input");

    for (let card of cards) {
        card.addEventListener("click", function() {
            turnCard();
        })
    }

    button[0].addEventListener("click", function() {
        playGame();
    })

});

/**
 * Starts a new game with random position of the images.
 */
function playGame() {
    alert("hello from inside the playGame function!");
}

/**
 * Turns the card clicked on.
 */
function turnCard() {
    alert("hello from inside the turnCard function!");
}

/**
 * Checks if the turned cards are a pair or not.
 */
function checkPair() {
        alert("hello from inside the checkPair function!");
}

/**
 * Counts number of draws.
 */
function drawCount() {
    alert("hello from inside the drawCount function!");
}

/**
 * Keeps the record: The lowest drawcount for every game played sinse page loaded.
 */
function recordCound() {
        alert("hello from inside the recordCount function!");
}

/**
 * Congratulates when all pairs are found.
 */
function gameFinished() {
    alert("hello from inside the gameFinished function!");
}

