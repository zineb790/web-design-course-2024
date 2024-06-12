//Part 1: Fizz Buzz//

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.
for (let i = 1; i <= 100;i++){
    if (i%3===0) {
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz")
    } else {
        console.log(i);
    }

}

//Part 2: Prime Time//

// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Declare an arbitrary number n
let n = 4; // You can change this value to test with other numbers

// Increment from n to find the next prime number
let nextPrime = n + 1;

while (true) {
  if (isPrime(nextPrime)) {
    console.log(nextPrime);
    break;
  }
  nextPrime++;
}


//Part 3: Feeling Loopy
