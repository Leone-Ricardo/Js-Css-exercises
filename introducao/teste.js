function multiplyAll(arr) {
    var product = 1;
    
    for (let i = 0; i < arr.length; i++) {
        const subArray = arr[i];
        for (let j = 0; j < subArray.length; j++) {
          product *= subArray[j];
      }
    }
    return product;
  }
  
 console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));