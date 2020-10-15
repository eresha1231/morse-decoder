const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arr = [];
    let arr1 = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }
    for (let i = 0; i < arr.length; i++) {
        let dotdash = arr[i].split('');
        for (let j = 0; j < dotdash.length; j++) {
            if (dotdash[j] + dotdash[j + 1] === '10') {
                dotdash.splice(j, 2, '.');
            } else if (dotdash[j] + dotdash[j + 1] === '11') {
                dotdash.splice(j, 2, '-');
            } else {
                dotdash.splice(j, 2, '');
            }
        }
        arr1.push(dotdash.join(''));
    }
    let decodedString = '';
    for (let i = 0; i < arr1.length; i++) {
        (arr1[i] !== '') ? decodedString += MORSE_TABLE[arr1[i]]: decodedString += ' ';
    }
    return decodedString;
}

module.exports = {
    decode
}