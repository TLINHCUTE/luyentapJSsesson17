const number = prompt("Nhập vào một số:");
const formattedCurrency = Number(number).toLocaleString("vi-VN", { style: "currency", currency: "VND" });
document.writeln(formattedCurrency);
