var string = 'hello world';

var isUnique = function(string) {
  debugger;
  [string].reduce(function(previousValue, currentValue, currentIndex, array){

    return previousValue + currentValue;
  });
};

isUnique(string);
