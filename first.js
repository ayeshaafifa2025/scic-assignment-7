// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

function reverseString(str) {
  let arr = str.split("");
  let reversedArr = arr.reverse();
  let reversedString = reversedArr.join("");
  return reversedString;
}
console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("programming")); 


// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam"));  
console.log(isPalindrome("hello"));  

// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMaxNumber([5, 1, 9, 3])); 


// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
function sumOfNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumOfNumbers([1, 2, 3, 4])); 

// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.

function findEvenNumbers(arr) {
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world"));



// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));



// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();

