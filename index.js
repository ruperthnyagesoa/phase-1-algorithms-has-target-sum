function hasTargetSum(array, target) {
  // Write your algorithm here
 for (let i = 0; i < array.length; i++){
  const num1 = target - array[i];

  for (let x = i + 1; x < array.length; x++) {
      if (array[x] === num1)
      return true
  }
 }
 return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/ // the function should
  //return true if the sum of any two numbers in the array matches the target number
  //else it should return false.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 5, 7, 9], 11));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;