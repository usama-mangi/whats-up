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
  `${months[date.getMonth()]} ${date.getDay()}, ${getHourMinAorP(date)}`;

export const getHourMinAorP = (date: Date) => {
  let hours = date.getHours();
  let a = "AM";
  if (hours === 12) {
    hours = 12;
    a = "PM";
  } else if (hours === 24) {
    hours = 12;
    a = "AM";
  } else if (hours > 12) {
    hours = hours % 12;
    a = "PM";
  }

  return `${hours.toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")} ${a}`;
};
