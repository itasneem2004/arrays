// Arrays in JavaScript are a fundamental data structure used to store collections of values. 
// They can hold various data types, including numbers, strings, objects, functions, and even other arrays. 
// Arrays in JavaScript are zero-indexed, which means the first element is at index 0, 
// the second element is at index 1, and so on.

// Creating an Array:
// You can create an array using either array literals or the Array constructor.

// Using array literals
// const fruits = ["apple","mango","blueberry"];
// .................. 0 ...... 1 ...... 2 ...

//  Using the Array constructor
// const colors =  ["red","yellow","blue"];

// console.log(fruits[0]);
// console.log(colors[2]);

// Modifying Elements:
// You can change the value of an array element by assigning a new value to it.

// fruits[2] = "strawberry";
// console.log(fruits);

// Array Length:
// You can find the number of elements in an array using the length property.

// console.log(fruits.length);

// Array Methods:
// JavaScript provides a variety of methods to manipulate arrays. Some common array methods include:

// push(): Add an element to the end of the array.
// pop(): Remove the last element from the array.
// unshift(): Add an element to the beginning of the array.
// shift(): Remove the first element from the array.
// concat(): Concatenate two or more arrays.
// slice(): Create a new array by slicing a portion of an existing array.
// splice(): Add or remove elements from an array at a specified position.
// forEach(): Iterate over the array elements.
// map(): Create a new array by applying a function to each element of an existing array.
// filter(): Create a new array with elements that pass a specified condition.
// reduce(): Reduce an array to a single value using a callback function.
// find(): Find the first element that satisfies a condition.
// indexOf(): Find the index of a specified element.
// includes(): Check if an array contains a specified element.

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
// const fruits = ["apple","mango"];
// fruits.push("watermelon","cherry");
// console.log(fruits);

// pop(): Removes and returns the last element from an array.
// const colors = ["magenta","cyan","purple"];
// const lastcolor = colors.pop();
// console.log(lastcolor);
// console.log(colors);

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// const names = ["mir","aftab"];
// names.unshift("tasneem","zehra");
// console.log(names);

// shift(): Removes and returns the first element from an array.
// const fruits = ["strawberry", "kiwi", "pineapple"];
// const firstfruits = fruits.shift();
// console.log(firstfruits);
// console.log(fruits);

// concat(): Combines two or more arrays and returns a new array
// const names = ["shahid", "mir"];
// const age = ["16", "22"];
// const combined = names.concat(age);
// console.log(combined);

// slice(): Returns a shallow copy of a portion of an array into a new array.
// const colors = ["red", "blue", "green", "yellow"];
// const slicedcolors = colors.slice(1,3);
// console.log(slicedcolors);

// splice(): Adds or removes elements from an array at a specified index.
// const fruits = ["apple", "banana", "cherry"];
// fruits.splice(2, 2, "grape"); // 
// console.log(fruits); // 

// indexOf(): Returns the first index at which a given element is found in the array, or -1 if it's not found.
// const fruits = ["apple", "banana", "cherry"];
// const index = fruits.indexOf("banana");
// console.log(index); 

// includes(): Checks whether an element exists in the array and returns true or false.
// const fruits = ["apple", "banana", "cherry"];
// const hasCherry = fruits.includes("cherry");
// console.log(hasCherry); //

// Iterating Through an Array:
// You can loop through the elements of an array using for loops, forEach(), for...of, or other looping constructs.
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.forEach((i) => {
//   console.log(i);
// });

// for (const fruit of fruits) {
//   console.log(fruit);
// }
