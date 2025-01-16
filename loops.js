console.log(" <========== Fizz Buzz ==========> ");

//* Loop through all numbers from 1 to 100
     // Check if number is divisble by 3 (use % to check for remainder!).
     // Check if the number is divisible by 5.
     // Check if the number is divisible by both 3 and 5.
     // If none of the above conditions are met, log the number itself.
     
          //* Easier to read and understand.
          for (let x = 1; x <= 100; x++) {

          if (x % 3 === 0 && x % 5 === 0) {
               console.log("Fizz Buzz");
               
          } else if (x % 3 === 0) {
               console.log("Fizz");
               
          } else if (x % 5 == 0) {
               console.log("Buzz");
               
          } else {
               console.log(x);
               
          }
     }
     
//? Are there any other ways:

//* More concise and avoids repetitive conditions like "x % 3 === 0 && x % 5 === 0".

     // for (let x = 1; x <= 100; x++) {
     //      let output = " ";
     //      if (x % 3 === 0) output += "Fizz";
     //      if (x % 5 === 0) output += "Buzz";
     //      console.log(output || x);
          
     // }

//*Both are efficient and work, but the choice depends on readability or personal preference.

console.log(" <========== Prime Time ==========> ")


//* Function to check if a number is prime
function isPrime(num) {
     console.log("Checking if", num, "is prime...");
     
     if (num <= 1) return false; // numbers less than or equal to 1 are not prime numbers
     console.log(num, "is not prime (<= 1).");
     
     let i = 2; // checking divisors from 2
     while (i < num) { // loops until "i" reaches "num"
          console.log("Checking if", num, "is divisible by", i);
          
          if (num % i === 0) {
               console.log(num, "is divisible by", i, "so it is not prime.");
               
               return false; // if divisible, then its not a prime number
          }
          i++; // increment divisor
     }
     console.log(num, "is prime!");
     
     return true; // if none found, it's prime
}

//* Find the next prime number using a while loop
// Arbitrary number n
let n = 25;
console.log("let n =", n);

let nextPrime = n + 1; // start checking from next number
console.log("Starting from:", nextPrime);

while (!isPrime(nextPrime)) { // keeps going until it finds prime
     console.log(nextPrime, "is not prime, checking next number...");
     
     nextPrime++; // next number
}

console.log("The next prime number is: ", nextPrime); // log result

console.log(" <=========== Feeling Loopy ==========> ");

const csvString = "ID,Name,Ocupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

//* Split string into rows using "\n"
const rows = csvString.split("\n");

//* Loop through each row
for (let x = 0; x < rows.length; x++) {
     const row = rows[x]; // current row
     const cells = row.split(","); // split row into cells using ","
     console.log(cells[0], cells[1], cells[2], cells[3]);
     
}
console.log("")
const csvString2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

const rows2 = csvString2.split("\n");
for (let i = 0; i < rows2.length; i++) {
     const row = rows2[i];
     const cells = row.split(",");
     console.log(cells[0], cells[1], cells[2], cells[3]);
    
}
