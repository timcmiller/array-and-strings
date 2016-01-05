var string1 = 'hello world';
var string2 = 'derlw hlloo';

var stringSort = function(string) {
  return string.split('').sort().join('');
};


var permutation = function(ogString, newString) {
  if(stringSort(ogString) === stringSort(newString)) {
    console.log(newString + ' is a permutation of ' + ogString + '.');
    return;
  }
  console.log('They are not a permutaiton');
  return;
};

permutation(string1, string2);
