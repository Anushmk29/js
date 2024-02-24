// Capitalize First Letter of Strings in Array

const capitalizeFirstLetter = (arr) => {
    return arr.map((str) => str.toLocaleUpperCase().charAt(0) + str.slice(1));
  };
  
  const array = ['hello', 'world'];
  const capitalizedArray = capitalizeFirstLetter(array);
  console.log(capitalizedArray); // Output: ['Hello', 'World']
  