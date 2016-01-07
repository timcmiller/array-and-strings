var text = "xabacd";

var stringHash = function(text) {
  var subString = '';
  var palendrome = '';
  for(var i = 0; i < text.length; i++) {
    subString = subString || text[i];
    if(subString.reverse === text[i + subString.length]) {
      subString += text[i];
      if((text[i] - subString.length) > palendrome.length);
      palendrome = text.substring(text[i], subString.length);
    } else {
      subString = '';
    }
  }
  console.log(palendrome);
  return palendrome;
};

stringHash(text);
