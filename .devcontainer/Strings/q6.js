function countVowelsLoop(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (const char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  const str = "hello world";
  const vowelCount = countVowelsLoop(str);
  console.log("Number of vowels:", vowelCount); // Output: 3
  