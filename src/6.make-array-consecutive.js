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
function makeArrayConsecutive(nums) {
    let count = 0;
    const sortedNums = nums.sort((a, b) => a - b);
    const min = nums[0];
    const max = nums[nums.length - 1];
    
    for(let i = min; i < max; i++) {
        if(!nums.includes(i)) {
            count++;
        } 
    }
    
    return count;
}
*/
