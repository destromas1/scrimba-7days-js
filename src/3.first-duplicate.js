const firstDuplicate = (nums) => {
  const visited = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (visited.hasOwnProperty(element)) {
      return element;
    }
    visited.push(element);
  }

  return -1;
};

export default firstDuplicate;

/*
function firstDuplicate(nums) {
  const firstDup = {};
  // iterate nums
  for(let num of nums) {
  // check for a duplicated value
  if(firstDup.hasOwnProperty(num)) {
      // return duplicated nums
      return num;
  }
  
      firstDup[num] = null;
  }
  
  // dont find a duplicate return -1
  return -1;
}
*/
