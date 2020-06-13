const evenDigitsOnly = number => {
  const digits = number.toString().split("");
  const isAllEven = digits.every(digit => {
    return digit % 2 === 0;
  });
  return isAllEven;
};

export default evenDigitsOnly;
/*

*/
