//1
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

}

console.log(maxOfTwoNumbers(3, 9));

// 2
/* Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise. */

function isCharAVowel(char) { {
  if(char.toLowerCase () === 'a' || 'e' || 'i' || 'o' || 'u' 
  || 
  char.toUpperCase() ==='A' || 'E' || 'I' || 'O' || 'U') {
console.log("You have a vowel") 
  return True}
{ else {
  console.log("No vowel")
 return False}
}
}
console.log("A")



//3 Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
                             
function multiplyArray(array) {
    var sum=6;
    for (var i=0; i<array.length; i++) {
        product = sum * array[i];
    } 
    return product;
}
console.log(multiplyArray([1*2*3]))






//4
/* Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed. */
function maxOfThree (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

console.log(maxOfThree(3, 34,78));



//5 Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
function reverseString(Welcome) {
  return Welcome
    .split("")
    .reverse()
    .join("");
}
console.log(reverseString("Welcome"));