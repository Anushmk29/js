// Check if String is a Palindrome

function palindrome(str)
{
    let reverse =''
    for (let i = str.length-1; i>=0; i--) {
        reverse+=str[i]
    }
    if (reverse==str) {
        console.log("true")
    }
    else{
        console.log("false")
    }
}

const str = 'racecar'
const output = palindrome(str)


