let a= Number(prompt("nhap a:"));
let b= Number(prompt("nhap b:"));
let c= Number(prompt("nhap c:"));
let sqrtDelta=Math.sqrt((b*b)-4*a*c);
let one=(-b + sqrtDelta)/(2*a);
let two=(-b - sqrtDelta)/(2*a);
document.writeln(one);
document.writeln(two);


