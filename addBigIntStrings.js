//Write a function that adds two strings returns as a string, but can add large ints without BigInt
//first try:
const addLargeNum = (s1, s2) => {
  const theSum = [];
  const split1 = s1.split("").map((s) => +s);
  const split2 = s2.split("").map((s) => +s);

  let oneLength = split1.length;
  let twoLength = split2.length;

  //if 1 is bigger than 2 then I have to add 0, 0's to the beginning of two until they're even in length
  if (oneLength > twoLength) {
    //get the difference. this is the break point for i
    let breakPoint = oneLength - twoLength; // should be 2
    for (let i = 0; i < breakPoint; i++) {
      split2.unshift(0);
      twoLength = split2.length;
    }
  } else if (twoLength > oneLength) {
    //get the difference. this is the break point for i
    let breakPoint = twoLength - oneLength; // should be 2
    for (let i = 0; i < breakPoint; i++) {
      split1.unshift(0);
      oneLength = split1.length;
    }
  }

  //now that the numbers are done correctly, add each of the respective indices together and push the sum

  //at this point the lengths will be equal
  let carry = 0;
  for (let i = oneLength - 1; i >= 0;) {
    console.log("I'm the last time in the arrays", split1[i], split2[i]);
    if (split1[i] + split2[i] > 9) {
      console.log("I met the if condition");
      carry = +(split1[i] + split2[i]).toString().charAt(1);
      let result = split1[i] + split2[i] - 10;
      console.log("I am result", result);
      theSum.push(result);
    } else {
      console.log("im in the else");
      console.log("I am carry", carry);
      theSum.push(split1[i] + split2[i] + carry);
      carry = 0;
    }

    console.log("the array", theSum);
    i--;
  }

  let answer = theSum.reverse().join("");

  console.log(answer);

  // It was like take the lengths of the array and add shift 0's to the shorter array until they're the same length, then go through the values at the same index add them and then push them to a new array and then turn that into a string. I just thought that maybe I could've used the format of 1e32+1 to reconstruct the number or something
};

//refactor:

const addLargeNum2 = (s1, s2) => {
  var addStrings = function(num1, num2) {
    const length = Math.max(num1.length, num2.length) + 1; //room for the carried value
     const theSum = new Array(length);
   
     let carry = 0;
   
     for (let i = 0; i < length; i++) {
       //to calculate in reverse
       const digi1 = parseInt(num1[num1.length - 1 - i] || 0, 10);
       const digi2 = parseInt(num2[num2.length - 1 - i] || 0, 10);
   
       let sum = digi1 + digi2 + carry;
       carry = 0;
       if (sum > 9) {
         carry = 1; //because it will always be one if there's a carry
         sum -= 10; //to the get the one's place value
       }
       theSum[length - 1 - i] = sum;
         if (theSum[0] === 0) theSum.shift();
     }
       return theSum.join("");
   };
}

addLargeNum2("9", "99");