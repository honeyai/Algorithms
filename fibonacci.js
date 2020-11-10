//Fibonacci Challenge

const { array } = require("prop-types");

//Where every number is the sum the two previous ones.
//Make a function that takes in n, where n represents how many numbers in the sequence you want to create
//ie. fibGen(3) returns [0,1,1].

//Checking for array
//First two numbers must be 0, 1

//First attempt without video help => two pointer pattern
const fibGen = (n) => {
  if (typeof n !== "number" || n === 0) {
    return console.log("invalid n");
  } else if (n == 1) {
    return (output = [0]);
  } else if (n == 2) {
    return (output = [0, 1]);
  } else {
    let standard = [0, 1];
    let arrayLength = n; //expected array length
    let output = standard;
    let i = 0;
    //while the length of the standard array is less than the expected array length do the sequence
    while (standard.length < arrayLength) {
      let current = standard[i];
      let next = standard[i + 1];
      let sum = current + next;
      output.push(sum);
      i++; // this should make first and next values move up in the array
      //ie.  <<my expectation>>
      //first round :
      //current = 0
      //next = 1
      //sum = 1
      //return array [0,1,1]
      //second round :
      //current = 1
      //next = 1
      //sum = 2
      //so on and so forth
    }
    return output;
  }
};

//console.log(fibGen(2));

//attempt with recursion

//so the function has to call itself for as many times that there is n. 
  //takes things that are done imperatively and makes it hidden.

const fibGenRecursive  = n => {
  if(n === 0) {
    return 0;
  } else if( n === 2) {
    return 1;
  } else {
    return fibGenRecursive(n - 1) - fibGenRecursive(n - 2);
  }
}

console.log(fibGenRecursive(5));
