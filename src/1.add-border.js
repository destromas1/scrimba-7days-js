const addBorder = (array) => {
  let newArray = [];
  const border = "*****";

  newArray.push(border);
  newArray = newArray.concat(...array.map((val) => `*${val}*`));
  newArray.push(border);

  return newArray;
};

export default addBorder;

/*
function addBorder(array) {
  //  write code here.
  const wall = "*".repeat(array[0].length + 2);

  array.unshift(wall);
  array.push(wall);

  for (let i = 1; i < array.length - 1; i++) {
    array[i] = "*".concat(array[i], "*");
  }

  return array;
}
*/
