let fact = 1, n;

n = parseInt(prompt(`Enter The Number You Want Factorial Upto: `));

if(n === 0)
{
    document.write(`<h2> Factorial Of 0 Is 1 </h2>`);
}

else if(n < 0)
{
document.write(`<h2> Error! You Entered Negative Number </h2>`);
}

else
{
for (let i = 1; i <= n; i++)
{
    fact = fact * i;
}
document.write(`<h3> Factorial Of ${n} Is: ${fact} </h3>`);
}