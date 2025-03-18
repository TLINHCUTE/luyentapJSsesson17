let r = Number(prompt("Nhập bán kính:"));
let a =4/3;
let Pi = Math.PI;
let V =a*Pi*(r*r*r);
let S =4*Pi*(r*r);
let C =2*Pi*r;
document.writeln("Thể tích hình cầu: " + V.toFixed(2) + " ");
document.writeln("Diện tích hình cầu: " + S.toFixed(2) + " ");
document.writeln("Chu vi lớn nhất của hình cầu: " + C.toFixed(2) + " ");