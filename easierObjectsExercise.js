  // 1 Create an object called me with 2 properties: name and age. Set the name to be your name and the age to be your age.
// let me = {
//     name: "Alex",
//     age: 21,
// }

  // 2 Use the increment operator to increase the value of your age once.
// me.age++
// console.log(me.age);

  // 3 Add another property called hobbies and set the value to be an array of strings that represent some of your hobbies, make sure the array has at least 3 values.
  let me = {
    name: "Alex",
    age: 21,
    hobbies: ["golf", "surf", "yeet", "creet"]
  }
// console.log(me.hobbies);

  // 4 Add another property called Pets which should be an array of objects that represent your pets (make some up if you don't have any). Each pet should have 3 properties: name, age and species.
//   let me = {
//     name: "Alex",
//     age: 21,
//     hobbies: ["golf", "surf", "yeet", "creet"],
//     pets: [
//     {
//         name: "John",
//         age: 2,
//         species: "dog",
//     },
//     {
//         name: "Alex",
//         age: 21,
//         species: "human",
//     },
//     {
//         name: "Don",
//         age: 1,
//         species: "cat",
//     }
// ]
// } 
// console.log(me.pets);

 // 5 Use string concatenation to print out a list of your hobbies in a sentence. This code should work even if you add more elements to the list. Eg. "My hobbies are painting, drawing and exercising", "My hobbies are painting, drawing, exercising and skydiving"
 for (let i = 0; i < me.hobbies.length; i++) {
    let hobby = me.hobbies[i];
    hobbies =+ hobby;
    console.log(hobby);
}