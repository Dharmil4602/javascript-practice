let fact = 1, n;

n = parseInt(prompt(`Enter The Number You Want Factorial Upto: `));
for (let i = 1; i <= n; i++)
{
    fact = fact * i;
}
document.write(`<h3> Factorial Of ${n} Is: ${fact} </h3>`);