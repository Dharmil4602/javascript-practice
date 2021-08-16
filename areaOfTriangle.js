// Area Of Normal Triangle

let h1 = parseInt(prompt(`Enter The Value Of Height: `));
let w1 = parseInt(prompt(`Enter The Value Of Width: `));
let areaOfNorm = (h1 * w1)/2;
console.log(`Area Of Normal Triangle is: ${areaOfNorm}`); 

// Area Of Eqilateral Triangle

let side = parseInt(prompt(`Enter The Vale Of Side Of Equilateral Triangle: `));
let areaOfEqui = (Math.sqrt(3)/4) * side * side;
console.log(`Area Of Equilateral Triangle Is: ${areaOfEqui}`);

// Area Of Right Angled Triangle

let h2 = parseInt(prompt(`Enter The Value Of Height Of Right Angled Triangle: `));
let b2 = parseInt(prompt(`Enter The Value Of Base Of Right Angled Triangle: `));

let areaOfRight = 1/2 * h2 * b2;
console.log(`Area Of Right Angled Triangle Is: ${areaOfRight}`);

