// Merge Arrays without Duplicates

function mergeAr(arr1,arr2)
{
return[...new Set(arr1.concat(arr2))]
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const mergedArray = mergeAr(arr1, arr2);
console.log(mergedArray); 