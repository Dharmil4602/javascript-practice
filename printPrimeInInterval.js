let start,end,num;
start = parseInt(prompt(`Enter The Starting Number Of Interval: `));
end = parseInt(prompt(`Enter The Ending Number Of Interval: `));

for(let i = start; i<end; i++)
{
    num = 1;
    for(let j = 2; j<=i/2; j++)
    {
        if(i % j == 0) // Checks For Not Prime
        {
            num = 0; 
            break;
        }
    }
    if(num == 1) // Checks For Prime
    {
        console.log(i);
    }
}