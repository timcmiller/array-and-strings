var string = " Mr John  Smith   ";
arr = string.split('');

var urlify = function(arr, index) {
  for(var i = index; i < arr.length; i++) {
    if(arr[i] === ' ' && i === 0) {
      arr = urlify(arr.slice(i + 1), 0);
    }
    if(arr[i] === ' ') {
      arr = replaceSpace(arr, i);
    }
  }
  return arr;
};

var replaceSpace = function(arr, index) {
  for(var i = index; i < arr.length; i++) {
    if(arr[i + 1] && arr[i + 1] !== ' ') {
      arr.splice(index, 1, '%20');
      break;
    } else {
      arr.splice(index, 1);
    }
  }
  return arr;
};

string = urlify(arr, 0).join('');
console.log(string);
