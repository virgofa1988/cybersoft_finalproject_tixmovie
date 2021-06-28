export const MyDate = (dateObject) => {
  const parts = {
    date: dateObject.getDate(),
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear(),
    hour: dateObject.getHours() % 12 || 12,
    minute: dateObject.getMinutes().toString().padStart(2, 0),
    amOrPm: dateObject.getHours() < 12 ? "AM" : "PM",
  };
  return `${parts.date}/${parts.month}/${parts.year}- ${parts.hour}:${parts.minute} ${parts.amOrPm} `;
};
