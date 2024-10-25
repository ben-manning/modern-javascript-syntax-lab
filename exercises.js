// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const multiples = nums.map((num) => {
  return num * 2;
});

// console.log(multiples);

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
// const [pineapple, olives] = pizzaToppings;

// console.log(pineapple);
// console.log(olives);

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

// const car = {
//   make: 'Audi',
//   model: 'q5',
// };

// Your code here
// const { make, model } = car;

// console.log(make);
// console.log(model);

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

// console.log(controversialPizzaToppings);

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
// const myCar = { ...car };

// console.log('this is the original version of myCar:', myCar);

// myCar.model = 'q7';

// console.log('this is the original car object:', car);
// console.log('this is the updated myCar object:', myCar);


// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
// const userProfile = {};
// let propertyName = 'username';

// userProfile[propertyName] = 'pookymane';

// console.log('This is the userProfile object:', userProfile);
