var text = "xabacd";

var stringHash = function(text) {
  text.split('');
  var subString = [];
  var palendrome = '';
  for(var i = 0; i < text.length; i++) {
    if(subString.length === 0) subString.push(text[i]);

    if(subString.reverse === text.slice(i, i + subString.length)) {

      subString += text[i];
      if((text[i] - subString.length) > palendrome.length);
      palendrome = text.slice(i, i + subString.length);

    } else {
      subString = '';
    }
  }
  console.log(palendrome.join(''));
  return palendrome;
};

stringHash(text);
