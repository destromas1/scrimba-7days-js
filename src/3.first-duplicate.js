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
