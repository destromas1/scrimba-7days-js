const makeArrayConsecutive = nums => {
  const sorted = nums.sort((a, b) => a - b);
  let missingCount = 0;

  for (let index = 0; index < sorted.length; index++) {
    const num = sorted[index];
    if (num + 1 !== sorted[index + 1]) {
      missingCount++;
    }
  }
  return missingCount;
};

export default makeArrayConsecutive;
/*

}
*/
