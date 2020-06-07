const sumAllPrimes = (num) => {
  let result = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      result += i;
    }
  }
  return result;
};

export default sumAllPrimes;
