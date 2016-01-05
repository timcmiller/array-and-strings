var string1 = 'abcd';
var string2 = 'bcdaf';

//create a hash

var permutation = function(ogString, newString) {

  var hash = {};

  for(var i = 0; i < ogString.length; i++) {
    hash[ogString[i]] = 1;
  }

  for(i = 0; i < newString.length; i++) {
    if(!hash[newString[i]]) {
      console.log('This contains the character ' + newString[i] + ' and the original string does not.');
      return;
    }
  }
  console.log('This is a permutation');
  return;
};

permutation(string1, string2);
