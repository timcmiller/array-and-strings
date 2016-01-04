var string = 'hello world';

var isUnique = function(string) {
  for(var i = 0; i < string.length; i++) {
    for(var j = i + 1; j < string.length; j++) {
      if(string[i] === string[j]) {
        console.log('This String is not Unique! It contains ' + string[i] + ' at the ' + i + ' index and ' + j + ' index.');
        return;
      }
    }
  }
};

isUnique(string);
