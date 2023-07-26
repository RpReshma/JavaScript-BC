//Assignment 3: Array of Objects Operations
//1. Create an empty array called "cars".
//let cars=[];
//console.log(cars);
//2. Add three car objects to the "cars" array. Each car object should have the following properties:
   //- make: "Toyota"
   //- model: "Camry"
   //- year: 2018
let car1={make:"Toyota",model:"Camry",year:"2018"}
let car2={make:"Toyota",model:"Camry",year:"2018"}
let car3={make:"Toyota",model:"Camry",year:"2018"}
let cars=[car1,car2, car3];
//console.log(cars);

//3. Remove the first car object from the "cars" array.
cars.splice(0,1);
//console.log(cars);
//4. Add a new car object to the "cars" array with the following properties:
  // - make: "Honda"
   //- model: "Civic"
   //- year: 2020
let car={make: "Honda",model: "Civic",year:"2020"}
cars.push(car);
//console.log(cars);
//5. Update the "model" property of the second car object in the array to "Accord".
car2.model='Accord'
//console.log(cars);
//6. Print the final "cars" array after performing the above operations.
console.log(cars);

