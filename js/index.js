console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Ivan";
console.log(`The driver name's ${hacker1}`);

let hacker2 = "Chrome";
console.log(`The navigator name's ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// Iteration 3.1
let newHacker1 = "";

for (let i of hacker1) {
  newHacker1 += i.toUpperCase() + " ";
}
console.log(newHacker1);

// Iteration 3.2
let reverseHacker1 = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseHacker1 += hacker1[i];
}
console.log(reverseHacker1);

// Iteration 3.3

let firstLetterDriver = hacker1.toLowerCase();
let firstLetterNav = hacker2.toLowerCase();

if (firstLetterDriver < firstLetterNav) {
  console.log("The driver's name goes first.");
} else if (firstLetterDriver > firstLetterNav) {
  console.log("Yo, the navigator goes first definitely.");
} else if (firstLetterDriver === firstLetterNav) {
  console.log("What?! You both have the same name?");
} else {
  console.log("There's something wrong");
}
