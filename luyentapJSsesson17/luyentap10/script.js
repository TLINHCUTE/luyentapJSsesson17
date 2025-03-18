let a = Number(prompt("nhap so:")); 
let result = Number.isInteger(Math.sqrt(a))
    ? `${a} là số chính phương`
    : `${a} không phải là số chính phương`;
document.writeln(result);
