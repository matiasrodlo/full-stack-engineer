const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    
    const indexToCheck = Math.floor((left + right) / 2);
    // 1. Create a constant called checking
    const checking = arr[indexToCheck]
    // 2. Create a conditional below
  if (checking == target) {
    return indexToCheck
  }
    return null;
  }
  
  const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
  const target = 28;
  
  console.log(binarySearch(searchable, target));
  
  module.exports = {binarySearch};