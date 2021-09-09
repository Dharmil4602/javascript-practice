let n = parseInt(prompt(`Which Function Do You Want To Perform? Enter
1 For Addition
2 For Subtraction
3 For Multiplication
4 For Divition`));

if(n > 4)
{
    document.write(`<h2> You Entered Wrong Number For Selection Of Function </h2>`);
}

else if(n == 1)
{
    let sum;
    confirm(`You Have Selected Addition! Are You Sure?`);
    let a1 = parseInt(prompt(`Enter The First Number:`));
    let a2 = parseInt(prompt(`Enter The Second Number:`));
    sum = a1 + a2;
    document.write(`<h2> Summation Of ${a1} And ${a2} Is ${sum} </h2>`);
}

else if(n == 2)
{
    let subtract;
    confirm(`You Have Selected Subtraction! Are You Sure?`);
    let a1 = parseInt(prompt(`Enter The First Number:`));
    let a2 = parseInt(prompt(`Enter The Second Number:`));
    subtract = a1 - a2;
    document.write(`<h2> Subtraction Of ${a1} And ${a2} Is ${subtract} </h2>`);
}

else if(n == 3)
{
    let multiply;
    confirm(`You Have Selected Multiplication! Are You Sure?`);
    let a1 = parseInt(prompt(`Enter The First Number:`));
    let a2 = parseInt(prompt(`Enter The Second Number:`));
    multiply = a1 * a2;
    document.write(`<h2> Multiplication Of ${a1} And ${a2} Is ${multiply} </h2>`);
}

else if(n == 4)
{
    let divide;
    confirm(`You Have Selected Division! Are You Sure?`);
    let a1 = parseFloat(prompt(`Enter The First Number:`));
    let a2 = parseFloat(prompt(`Enter The Second Number:`));
    divide = a1 / a2;
    document.write(`<h2> Divition Of ${a1} And ${a2} Is ${divide} </h2>`);
}