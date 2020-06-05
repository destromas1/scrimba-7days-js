const addTwoDigits = num => {
  const result = num
    .toString()
    .split("")
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
  return result;
};

export default addTwoDigits;
