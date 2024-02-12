// Reverse a String

function reverse_string(str) {
    
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}

  let str = "hello"
  let reversed_string = reverse_string(str)
  console.log(reversed_string) 
  
