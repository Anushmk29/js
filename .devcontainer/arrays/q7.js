// Find Longest String in Arra y

function SearchString(arr){
    let longestSting = arr[0]
    for (let  i = 0;  i < arr.length;  i++) {
        if (arr[i].length>longestSting.length) {
            longestSting = arr[i]
        }
    }
    return longestSting;
}

const arr = ['short', 'longer', 'longest']
const longest = SearchString(arr)
console.log(longest)