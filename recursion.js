//A function that calls itself
// -  Has an exit condition
// ** the thing that makes recursive functions confusing is you have to keep track of the stacks that it's computing

const factorial = n => {
  if (n < 2) {
    return; 
  }
  console.log(n);
  return n * factorial(n-1);
}

// Starting with non recursive into recursive
//============================================
//==NonRecursive==
const countDown = n => {
  for (let i = n; i > 0; i--) {
    console.log(i)
  }
  console.log('hoorah');
}

countDown(3);

//==Recursive==
const countDownRecursive = n => {
  if (n <= 0) {               //here's the break statement => similar to the conditions of the for loop
    console.log('hoorah');    //in the nonrecursive this is printed when we're out of the loop
    return                    //here, once the condition of n <= 0 (read: i > 0), that's when we print
  }
  console.log(n)              //the body of the for loop exists in the body the function proper
  countDownRecursive(n-1);    //this is basically i-- ... where using n as the loop breaker
}

// play by play
// countDownRecursive(3) => 3 <= 0? no: print then recall n-1 => 2
//   countDownRecursive(2) => 2 <= 0? no: print then recall n-1 => 1
//      countDownRecursive(1) => 1 <= 0? no: print then recall n-1 => 0
//        countDownRecursive(0) => 0 <= 0? yes! return  ** once it completes the if statement it goes back up the stacks (since all of them have an implicit return at the end of the function we get the following)
//        return
//      return
//   return
// return

//== Nonrecursive ==
const sumRange = n => {
  let total = 0;
  for (let i = n; 1 > 0; i--) {
    total += i;
  }
  return total;
}

//== Recursive ==
const sumRangeRecursive = (n, total = 0) => { //total has to be passed in as a param because otherwise it wouldn't be available to every stack after the first call
//guard clause
if (n <= 0){
  return total
}
return sumRangeRecursive(n-1, total + n); //each stack will return the same total
}

//=== A common situation where recursion would be better served ====
//Print the children of a tree

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: []
    },
    {
      name: 'Zoe',
      children: [
        {
          name: 'Kyle',
          children: [],
        },
        {
          name: 'Sophia',
          children: []
        }
      ]
    }
  ]
}

const printChildren = t => {
  
}

const printChildrenRecursive = t => {
  //guard clause
  if (t.children.length === 0){
    return
  }
  t.children.forEach( child => {
    console.log(child.name);
    printChildrenRecursive(child); //literally going thru each child and printing them and going thru the branches
  })
}

//play by play
// printChildrenRecursive("John") => finds the children's names are zoe and jim. 
// First pass, jim
//  printChildrenRecursive('Jim') => Jim has no children so this one returns
//  return
// second pass, Zoe
//  printChildrenRecursive('Zoe') => zoe has children so it's called again
//    First pass, kyle 
//        printChildrenRecursive('Kyle') => no children so this returns
//        return
//      Second pass, sophies
//        printChildrenRecursive('Sophia') => no children so this returns too 
//        return