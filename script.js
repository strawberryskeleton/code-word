const morse_textbox = document.getElementById('morse_textbox')

const morse_code = {
    // letters
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",

    // digits
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",

    // symbols
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    "_": "..--.-",
    "\"": ".-..-.",
    "$": "...-..-",
    "@": ".--.-.",

    // word separator
    " ": "/" 
};

function convertToMorse () {
    let word = document.getElementById('actual_word').value
    let morse = ""

    // console.log(word)

    for (let ch of word.toUpperCase()) {
        morse += morse_code[ch]
        // console.log(ch)
        // console.log(morse)
    }

    // console.log(morse)

    morse_textbox.innerText = morse

}

// had to use this instead fo clearing directly with form becuase that was causing issues with displaying converted text
function clearInput () {
    document.getElementById('actual_word').value = ""
}