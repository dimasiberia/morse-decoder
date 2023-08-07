const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
let arr = expr.match(/(.{10}|.)/g);
for (let i=0; i<arr.length; i++){
    arr[i] = arr[i].replaceAll('10','.');
    arr[i] = arr[i].replaceAll('11','-');
    arr[i] = arr[i].replaceAll('0','');
    arr[i] = arr[i].replaceAll('**********',' ')
   if(Object.keys(MORSE_TABLE).includes(arr[i])){ 
    arr[i] = MORSE_TABLE[arr[i]];
   }else{
    arr[i] = ' ';
   }
}
return arr.join("")
}

module.exports = {
    decode
}