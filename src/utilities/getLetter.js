const getLetter = (name) => {
  if (!name) {
    return;
  }
  const nameArray = name.split("");
  return nameArray[0];
};

export default getLetter;
