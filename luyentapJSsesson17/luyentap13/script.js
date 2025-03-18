let money = Number(prompt("Nhập số tiền muốn gửi: "));
let month = Number(prompt("Nhập số tháng đã gửi: "));
//lai suat nam
let interestRate = 4.3 / 100; 
let profitMonth = interestRate / 12; 
let interest = money * profitMonth * month; 
document.writeln("Số tiền lãi là: " + interest.toFixed(2) + " VND");