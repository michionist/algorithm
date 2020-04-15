function diffArray(arr1, arr2) {
  var newArr = [] 
  var temp = arr1.concat(arr2).sort();
  for(var i = 0; i < temp.length; i++){
    for(var j = 0; j < temp.length; j++){
      if(temp[i] === temp[j] && i !== j)
        break;
      else if(j == temp.length - 1){
        newArr.push(temp[i]);
      }
    }
  }

  return newArr;
}

// Compare two arrays and return a new array with any 
// items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.

