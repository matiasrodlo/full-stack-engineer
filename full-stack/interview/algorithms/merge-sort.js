const mergeSort = (startArray) => {
    const length = startArray.length
    if (length == 1) {
      return startArray
    }
  }
  
  const inputArr = [3];
  
  console.log(mergeSort(inputArr));
  
  module.exports = {
    mergeSort
  };

// Splitting: Recursive Case

const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
      console.log(startArray);
      return startArray;
    }
    
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
    
    mergeSort(leftArray);
    mergeSort(rightArray);
  }
  
  const inputArr = [3, 5, 2, 90, 4, 7];
  
  console.log(mergeSort(inputArr));
  
  module.exports = {
    mergeSort
  };

// Call merge() from mergeSort()

  const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
      return startArray;
    }
    
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
  
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
  
  const merge = (leftArray, rightArray) => {
    console.log(leftArray);
    console.log(rightArray);
  }
  
  const inputArr = [3, 5, 2, 90, 4, 7];
  
  console.log(mergeSort(inputArr));
  
  module.exports = {
    mergeSort
  };