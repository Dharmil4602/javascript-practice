let num = parseInt(prompt(`Enter The Number: `));

if (num == 1) {
    console.log(`You Entered 1 Which Is Neither Prime Nor Composite`);
}
else if (num < 1) {
    console.log(`You Entered ${num} Which Is Not Prime`);
}
else {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            res = `${num} Is Not Prime`;
            break;
        }
        else {
            res = `${num} Is Prime`;
        }
    }
    console.log(res);
}