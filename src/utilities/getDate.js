const getFormatedDate = (value) => {
  let time;
  let options;
  if (!value) {
    time = Date.now();
  } else {
    time = Date.parse(value);
  }
  const date = new Date(time);
  if (!value) {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else {
    options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
};

export { getFormatedDate };
