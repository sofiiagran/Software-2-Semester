


function countBs(string) {
    for(let i = 0; i < string.lenght; i++) {
        if(string[i] === 'B') {
            count++;
        }
    }
    return count;
}

function countBsv2(string) {
    return countChar(string, 'B')
}

function countChar(string, char) {
    let count = 0;
    for(let i = 0; i < string; i++) {
        if (string.charAt(i) === char) {
            count ++;
        }
    }
}

console.log("The number of Bs in the string is  " + countBs("BBC"));
// → 2
console.log("The number of k in the string is  " + countChar("kakkerlak", "k"));
// → 4