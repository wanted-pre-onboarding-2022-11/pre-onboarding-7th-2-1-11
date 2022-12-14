export const newDate = (date) => {
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  const newDate = new Date(date);
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const weeks = WEEKDAY[newDate.getDay()];
  return `${month}월 ${day}일 (${weeks}) 부터`;
};

export const isNewItem = (date) => {
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const newDate = new Date(date);
  return +yesterday < +newDate ? true : false;
};
