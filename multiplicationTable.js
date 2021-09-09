let n = parseInt(prompt(`Enter The Number You Want Table Of: `));
let m = parseInt(prompt(`Enter The Number You Want Table Upto: `));
let multiply;
document.write(`<h2> Multiplication Table Of ${n} Is: </h2>`);
for(let i = 1; i <= m; i++)
{
    multiply = n * i;
    document.write(`${n} * ${i} = ${multiply}`);
    document.write("<br>")
    // console.log(`${n} * ${i} = ${multiply}`);
}