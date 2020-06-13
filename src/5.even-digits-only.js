const evenDigitsOnly = number => {
  const digits = number.toString().split("");
  const isAllEven = digits.every(digit => {
    return parseInt(digit) % 2 === 0;
  });
  return isAllEven;
};

export default evenDigitsOnly;
/*
function evenDigitsOnly(number) {
    const digits = number.toString().split('');
    
    return digits.every((digit) => parseInt(digit) % 2 === 0);
}
*/
