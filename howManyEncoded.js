//Given a string that will be numbers how many ways is this string encoded
//a=> 1 b=> 2 c => 3 .... L=> 12... thus in a given string of "12" there are two ways to decode this => "ab" and "L"
//if n is "01" function should return nothing because there isn't anything that has an encoding of 01

//Simplify:
//  n = "3" there is only one solution
//  n = "" there is only one solution because the original message must've been an empty string as well

//  n = "12345" can decoded recursively => two choices, decode from left to right which would be 1 => a and leaving 2345 or taking the two first 12 => L leaving 345, in each of those methods there will be a result. thus by adding the two results together it will be the combine value of how many ways there will be to decode 12345
// Basically: numberOfWays("2345") + numberOfWays("345")

//  n = "27345" can be approached like the above where the 2 => b. But there is no 27 thus the remaining is "b"  + numberOfWays("7345")

//  if n starts with zero that are no ways of decoding

//@param String will only be numbers
// identify base cases: (1)an empty string or (2)starting with zero
// identify recursive cases: calling the function on itself (1)twice: n = "12345" (2)once: n = "27345"

// not going to directly call our function recursively => will have function helper()

//this will be called recursively
// will only look at the last k number of letters
// and it will return the amount of encoding ways of the last k number of letters
const helper = (data, k) => {
  //account for base cases
  if (k == 0) return 1;
  if (data[0] == "0") return 0; //video does let s = data.length - k; "isn't this just literally saying look at the 0 index????"
  //account for recursive cases
  //called once is like twice but no additional pass
  let result = helper(data, k - 1);
  //called twice
  // when decoded with one letter first :: helper("12345", k) => k wil be reduced as the recursion happens meaning it's going to go through the string until the end: ie. k = 5, "12345" => a + "2345", k-1 = 4 => a + b + "345" etc.
  // when decoded with two letters first :: k will be subtracted by 2
  if (k >= 2 && parseInt(data.slice(0, 2)) <= 26) {
    result += helper(data, k - 2);
  }
  return result;
};


//based on nature of data might be highly inefficient:: if given helper("111111", 6) => time o(2^n) :: certain computations get repeated. 
// step 1 : h(6) => h(5) and h (4) => step 2 : h(5) => (h4) and h(3) => step 3: solve h(4) from the first step
const numberOfWays = (n) => {
  //calls helper
  return helper(n, n.length);
};

numberOfWays(23)
