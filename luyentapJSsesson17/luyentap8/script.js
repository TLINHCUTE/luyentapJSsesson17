let date1 = new Date("2025-02-26");
let date2 = new Date("2025-02-28");
let timeDifference = Math.abs(date2 - date1); 
// làm tròn số
let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); 
document.writeln(`Độ lệch là ${dayDifference} ngày`);

