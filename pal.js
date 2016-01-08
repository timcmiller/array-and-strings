var substrings = function(str) {
  if(str.length == 1) return str;
  else return [str].concat(substrings(str.slice(1))).concat((substrings(str.slice(0, str.length - 1))));
};

var isPalindrome = function(str) {
    if(str.length == 0) return true;
    else if(str.length == 1) return true;
    else return (str.charAt(0) == str.charAt(str.length - 1)) && isPalindrome(str.slice(1, str.length - 1));
};

var longestPalindrome = function(arr) {
  for(var i = 0; i < arr.length; i += 1) {
    if(isPalindrome(arr[i])) return arr[i];
  }
};

var str = 'abcraceeeeecarxyracecarz';
var subs = substrings(str);
subs.sort(function(a, b){
  return b.length - a.length;
});
console.log(longestPalindrome(subs));
