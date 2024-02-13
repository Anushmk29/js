// Find the Longest Word in a String
function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  const str = "Find the longest word in this sentence";
  const longestWord = findLongestWord(str);
  console.log("The longest word is:", longestWord); // Output: "longest"
  