
function makeSandwich(breadType, fillingType, condiments) {
  console.log("function testing");
   // TODO: make a sandwich with the given ingredients
   return breadType;
}
makeSandwich(1,2,3)
///
function removeHyphens(str) {
   let strWithoutHyphens = ''

   for (let i = 0; i < str.length; i++) {
      if (str[i] !== '-') {
         strWithoutHyphens += str[i];
      }
   }

   return strWithoutHyphens;
}

let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone));
//console.log(strWithoutHyphens);
let message = "Hello, World!";

function printMessage() {
   console.log(message);
}
printMessage();
let num = 42;

function isEven (num) {
   return num % 2 === 0;
}

console.log(isEven(43));


