var string1 = 'aeaeaeaeaeae';
var string2 = 'aeaeaeeaeaeaa';

var oneAway = function(str1, str2) {
  if(str1 === str2) return true;
  //equals

  if(str1.length === str2.length) {
    var diff = 0;
    for(var i = 0; i < str1.length; i++) {
      console.log(diff);
      console.log(str1[i], str2[i]);
      if(str1[i] !== str2[i]) diff++;

      if(diff > 1) return false;
    }
    return true;
  }
  //replace
  var diff = 0;
  for(var i = 0; i < Math.max(str1.length, str2.length); i++) {


    if(diff === 1) {
      if(str1[i] === str2[i - 1]) continue;
      if(str1[i - 1] === str2[i]) continue;
      return false;
    }
    if(str1[i] !== str2[i]) diff++;
  }
  return true;
};

console.log(oneAway(string1, string2));

