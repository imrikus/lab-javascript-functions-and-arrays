var arr = [
  "first item",
  "second item is longer than the third one",
  "third longish item",
];

var lgth = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    var lgth = arr[i].length;
    longest = arr[i];
  }
}

console.log(longest);

function findLongestWord(arrayWords) {
  if (arrayWords === []) return null;
  if (arrayWords.length === 1) return arrayWords[0];

  let masLarga = arrayWords[0];

  for (var i = 1; i < arrayWords.length; i++) {
    if (masLarga.length < arrayWords[i].length) {
      masLarga = arrayWords[i];
    }
  }
  return masLarga;
}
findLongestWord(words);
const resultado2 = findLongestWord(words);
console.log(resultado2);

var longWords = [
  "Penelope",
  "Johny",
  "Aubumayang",
  "Czechoslovakia",
  "Slovenia",
];
var longest = 0;
for (var i = 0; i < longWords.length; i++) {
  if (longest.length < longWords[i].length) {
    longest = longWords[i];
  }
}

console.log(longest);

// You can custom sort based on string length, and grab the first item:

// longWords.sort(function(a, b) {
//     return b.length - a.length;
// });
// This turns your array into the following:

// ["Czechoslovakia", "Aubumayang", "Penelope", "Slovenia", "Johny"]
// At that point, you can grab the first item. Note however that there may be other strings immediately following the first that are of the same length.

// As for your above code, longest is declared as a number, but later set to a string. The number we're interested in comes from the length of the string. Our condition should be:

// // No sense in looking this up twice
// current = longWord[i];

// if ( longest.length < current.length ) {
//     longest = current;
// }
