// Convert String to Title Case
function toTitleCaseReduced(str) {
    return str.toLowerCase().split(' ').reduce((title, word) => {
      title += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
      return title;
    }, '');
  }
  
  const myReducedString = "this is another string";
  const reducedTitleCaseString = toTitleCaseReduced(myReducedString);
  console.log(reducedTitleCaseString); // Output: "This Is Another String"
  