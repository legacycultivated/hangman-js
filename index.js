var programming_terms = [
  "javascript",
  "python",
  "sql",
  "nosql",
  "java",
  "typescript",
  "css",
  "bootstrap",
  "react",
  "angular",
  "array",
  "hashtable",
  "loop",
  "ruby",
];

let answer = " ";
let maxMistakes = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer =
    programming_terms[Math.floor(Math.random() * programming_terms.length)];
}

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
            <button
                class="btn btn-lg btn-primary m-2"
                id="` +
        letter +
        `"
                onClick= "handleGuess('` +
        letter +
        `')"
            >
            ` +
        letter +
        `
            </button>

        `
    )
    .join(" ");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

randomWord();
generateButtons();
