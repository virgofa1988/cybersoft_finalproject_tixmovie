function formatDate(dateObject) {
  const weekDay = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const parts = {
    date: dateObject.getDate().toString().padStart(2, "0"), // Thêm số 0 phía trước nếu ngày từ 1-9
    month: (dateObject.getMonth() + 1).toString().padStart(2, "0"), // Thêm số 0 phía trước nếu tháng từ 1-9
    year: dateObject.getFullYear(),
    day: dateObject.getDay(), // Sun-Sat --> 0-6
  };
  return `${weekDay[parts.day]} - ${parts.date}-${parts.month}-${parts.year}`;
}
let currentDate = new Date();
console.log(formatDate(currentDate)); //Output Chủ Nhật - 02-05-2021
