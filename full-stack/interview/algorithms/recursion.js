const iterativeFactorial = (n) => {
    let result = 1;
    while(n > 0) {
      result *= n;
      n -= 1;
    }
    return result;
  }
  
  // Set fourFactorial
  const fourFactorial = iterativeFactorial(4)
  
  console.log(fourFactorial)
  
  module.exports = {
    iterativeFactorial
  };

  // Recursive Case

  const recursiveFactorial = (n) => {
    if (n > 0) {
      console.log(`Execution context: ${n}`);
  
      recursiveFactorial(n - 1);
  
      return n * recursiveFactorial(n - 1);
    }
  };
  
  const recursiveSolution = recursiveFactorial(4);
  console.log(recursiveSolution);
  
  module.exports = {
    recursiveFactorial,
  };
  