// Count Occurrences of a Character in a String

function countString(str,char){
    let count =0
    for (let i = 0; i < str.length; i++) {
      if (str[i]== char) {
        count++
      }
    }
   return count;
}
const str = "hello world";
const char = "l";
const occurrences = countString(str, char);
console.log(occurrences)