const properNounCorrection = str => {
  const firstPart = str.slice(0, 1);
  const secondPart = str.slice(1);
  return firstPart.toUpperCase().concat(secondPart.toLowerCase());
};

export default properNounCorrection;
/*

*/
