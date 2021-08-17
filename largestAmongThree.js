let a,b,c;
a = parseInt(prompt(`Enter First Number: `));
b = parseInt(prompt(`Enter Second Number: `));
c = parseInt(prompt(`Enter Third Number: `));

if (a > c) {
    if (a > b) {
        console.log(`${a} Is Greater`);
    }
    else {
        console.log(`${b} Is Greater`);
    }
}

else
{
    console.log(`${c} Is Greater`);
}

// Largest Among Three Using Math Object.

let largest = Math.max(a,b,c);
console.log(`${largest} Is Greatest`);