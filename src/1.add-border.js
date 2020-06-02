const addBorder = (array) => {
  let newArray = [];
  const border = "*****";

  newArray.push(border);
  newArray = newArray.concat(...array.map(val => `*${val}*`));
  newArray.push(border);

  return newArray;
};

export default addBorder;
