var string = 'hello world';

var isUnique = function(string) {
  var hash = {};
  for(var i = 0; i < string.length; i++) {
    if(hash[string[i]]) {
      console.log('This String is not Unique! ' + string[i] + ' appears at index ' + hash[string[i]] + ' and ' + i + '.');
      return;
    }
    if(!hash[string[i]]) {
      hash[string[i]] = i;
    }
  }
};

isUnique(string);
