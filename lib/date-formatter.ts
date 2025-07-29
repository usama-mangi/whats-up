export const getHourMin = (date: Date) =>
  date.getHours().toString().padStart(2, "0") +
  ":" +
  date.getMinutes().toString().padStart(2, "0");

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getDateTime = (date: Date) =>
  `${months[date.getMonth()]} ${date.getDay()}, ${date.getHours().toString().padStart(2, "0")}:${(date.getMinutes() % 12).toString().padStart(2, "0")}`;
