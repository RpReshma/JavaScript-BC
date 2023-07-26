//Assignment 1: Array Operations
//1. Create an empty array called "fruits".
//let fruits =[];
//console.log(fruits);
//2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
let fruits=['apple','banana','orange'];
//console.log(fruits);
//3. Remove the first fruit from the array.
fruits.splice(0,1)
//console.log(fruits);
//4. Add "grape" to the end of the array.
fruits.push('grapes');
//console.log(fruits);
//5. Update the second fruit in the array to "pear".
fruits.splice(1,1,'pears')
//console.log(fruits)
//6. Print the final "fruits" array after performing the above operations.
console.log(fruits)