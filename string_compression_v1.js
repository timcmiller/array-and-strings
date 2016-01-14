//input string 'aabcccccaaa'
//return string 'a2v1c5a3'
//edge case: string will not become shorter return orignal string

var string = "abcdefg";

var compression = function(string) {
  var counter = 1;
  var newString = "";
  for(var i = 0; i < string.length; i++) {
    if(string[i] === string[i + 1]) {
      counter++;
    } else {
      newString += (string[i] + counter);
      counter = 1;
    }
  }
  console.log(newString);
  if(newString.length >= string.length) return string;
  return newString;
};

var newString = compression(string);
console.log(newString);

