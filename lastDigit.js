let a = parseInt(prompt(`Enter The First Number:`));
let b = parseInt(prompt(`Enter The Second Number:`));

let r1 = a % 10;
let r2 = b % 10;

if (r1 == r2) {
    document.write(`<h2> Last Digit Of Both The Number Are Same </h2>`);
} 
else {
    document.write(`<h2> Last Digit Of Both The Number Are Not Same </h2>`);
}
