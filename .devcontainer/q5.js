// Intersection of Two Arrays
function Intersection(arr1,arr2)
{
   return arr1.filter(x => arr2.includes(x))
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const intersectionArray = Intersection(arr1, arr2);
console.log(intersectionArray);