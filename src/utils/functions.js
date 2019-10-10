export const formateDate = dateString => {
  let date = new Date(dateString);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return day + "/" + month + "/" + year;
};

export const trimText = text => {
  if (text.length <= 50) return text;
  return text.substring(0, 50) + "...";
};
