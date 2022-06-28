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

// BONUS 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ipsum id ante aliquam, non iaculis odio molestie. Donec orci ex, molestie eget libero nec, maximus aliquam augue. Aenean diam magna, malesuada quis nulla vel, rhoncus laoreet nulla. Sed ut tortor orci. Phasellus rutrum, lorem et dignissim imperdiet, nunc nulla convallis ligula, at iaculis nibh nulla ut sem. Aenean auctor mi orci, in blandit augue aliquam non. Cras sed tincidunt nulla. Suspendisse facilisis lacus dui, id iaculis diam viverra a. Integer eleifend ligula non dictum varius. Vestibulum imperdiet convallis arcu. Nulla posuere ac erat in maximus.

Etiam eu sagittis ante. Mauris at felis ex. Ut luctus arcu in est dignissim, ut suscipit justo sodales. Donec sapien neque, lobortis vitae tellus ut, tincidunt dictum massa. Nunc eu elementum diam, egestas hendrerit quam. In vel convallis libero, in rhoncus dui. Sed ultricies augue eu mauris pharetra, sed sollicitudin augue convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam lorem lacus, congue quis vulputate vel, ultricies et turpis. Aenean scelerisque sed elit eu eleifend. Vivamus ligula nisi, blandit quis turpis vitae, fermentum facilisis sapien. Nulla ut leo feugiat, consequat ex eu, molestie sem. Curabitur viverra vulputate nibh cursus ullamcorper. Duis euismod, orci quis egestas lobortis, ex lacus aliquet libero, sagittis tempus purus purus vel augue.

Sed eget mi nec ante efficitur porttitor id quis velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam in odio risus. Aliquam non turpis at nulla laoreet mattis. In vel egestas quam. Pellentesque sit amet iaculis leo. In quis tellus fringilla, condimentum ligula a, vehicula tortor. Fusce nec pellentesque ante, sit amet blandit enim. Sed sed quam sit amet nisi sagittis mattis vitae vel sem. Duis nec lacinia urna, sit amet commodo justo. Curabitur tincidunt pellentesque ex, eget porttitor erat pharetra eu. Maecenas ut elit at massa dignissim vehicula. Pellentesque vitae tellus in nisl eleifend vulputate.`;

let counter = 0;
let etCounter = 0;

console.log(lorem.length);

for (let i = 0; i < lorem.length; i++) {
  if (lorem[i] === " " || lorem[i] === "\n") {
    counter++;
  }

  if (lorem[i] === "e" && lorem[i + 1] === "t") {
    etCounter++;
    console.log(lorem.includes("et"));
  }
}
console.log(counter);
console.log(etCounter);
/*
    En este caso añado un programa en el que cada vez que se encuentre un 
    espacio, cuente que ha cruzado por 1 palabra, y que cada vez que se 
    haga un salto de parrafo con "Enter" tambien cuente que se ha 
    recorrido una palabra debido a que ese espacio no lo contaria si solo 
    tenemos en cuenta la primera condicion del If.
*/

// BONUS 2

let phraseToCheck = "taco cat";
let reversePhrase = "";

let newPhraseToCheck = "";

for (i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] === " " ||
    phraseToCheck[i] === "," ||
    phraseToCheck[i] === "!" ||
    phraseToCheck[i] === "."
  ) {
    continue;
  } else {
    newPhraseToCheck += phraseToCheck[i].toLowerCase();
  }
}

for (i = newPhraseToCheck.length - 1; i >= 0; i--) {
  reversePhrase += newPhraseToCheck[i].toLowerCase();
}

console.log(newPhraseToCheck);
console.log(reversePhrase);

if (newPhraseToCheck === reversePhrase) {
    console.log("It's a Palindrome!")
} else {
    console.log("That's not a Palindrome")
}


