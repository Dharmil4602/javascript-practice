console.log(`Hello`);
let a,b,temp=0;

a = parseInt(prompt(`Enter First Number: `));
b = parseInt(prompt(`Enter Second Number: `));

temp = a;
a = b;
b = temp;

console.log(`After Swapping: ${a}, ${b}`);