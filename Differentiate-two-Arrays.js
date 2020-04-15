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

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array. Passed
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// Passed
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
// Passed
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// Passed
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
// Passed
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// Passed
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
// Passed
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// Passed
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
// Passed
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// Passed
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
// Passed
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// Passed
// [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
// Passed
// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
// Passed
// [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.

