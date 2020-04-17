// You will be provided with an initial array 
// (the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array 
// that are of the same value as these arguments.

// Note: You have to use the arguments object.



function destroyer() {
  // Const the Arguments obj into an array
  const args = Object.values(arguments);

  // Get the seeked array 
  const seekd = [...args[0]];

  // Get the destroyr array (The array that destroys the seeked array)
  const destroyr = args.slice(1);

  // Loop through a multiple Dimensional array (Both the Seekd and Destroyr Array)
  for(var i = 0; i < destroyr.length; i++){
   for(var j = 0; j < seekd.length; j++){
      if(destroyr[i] === seekd[j]){
        delete seekd[j]
      }
   }
  } 
  return seekd.filter(Boolean);
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) 


// TEST CASES
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)   returns [1, 5, 1];
// destroyer([[3, 5, 1, 2, 2], 2, 3, 5)   returns [1];
