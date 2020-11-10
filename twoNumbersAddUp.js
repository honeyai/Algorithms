//Given a list of numbers a number k, return whether any two numbers from the list add up to k.

//For example, given [10, 15, 3, 7] and K is 17, return true since 10 + 7 = 17.

//Bonus. Can you do this in one pass?

const doesItAddUp = (k, array) => {
  array.sort((a,b) => a - b);
    for (let i= 0, j = array.length -1; i < j;) {
    let sum = array[i] + array[j];
    if (sum < k) {
      i++;
    } else if (sum > k) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}

console.log(doesItAddUp(17, [10, 15, 3, 7]));

//WITH A HASHMAP
function hasSumK(arr, k) {
  hashMap = {};
  for (let value of arr) {
      if (hashMap[value]) { return true;} else { hashMap[k - value] = true };
  }
  return false;
}