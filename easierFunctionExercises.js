  // 1 Create a function that takes 2 arguments that are numbers and returns the sum of those numbers.
// function addingNumbers(number1, number2) {
//     return number1 + number2;
// }; 
// let mySum = addingNumbers(3, 4);
// console.log(mySum);

// let myNewSum = addingNumbers(12, 19);
// console.log(myNewSum);

  // 2 Create a function that takes 2 arguments that are numbers and returns the largest of those numbers.
// function possibleGreatestNumber(number1, number2) {
//     return number1 > number2;
// };
// let greatestNumber = possibleGreatestNumber(5, 9) 
//     console.log(greatestNumber);
//Need help with this question

  /* 3 Create a function that takes 1 argument that is an array and prints each of the elements in that array
  to the console.*/
  function myArrayPrinter(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let myItem = myArray[i];
        console.log(myItem);
    }
}

let names = [
    "Jim",
    "Bob",
    "Luke"
];

myArrayPrinter(names);

let dogs = [
    "Rex",
    "Scooby"
]
myArrayPrinter(dogs);

// 4 Create a function that takes 2 arguments, name and age, and returns an object with properties name and age set to the values passed in
function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

let luke = createPerson("Luke", 23);

console.log(luke);

// 5 Create a function that takes 1 argument that is an array of objects representing people. Each object should have a property name which should be a string and a property age which should be a number. The function should return the name of the oldest person.
let people = [
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Dana",
        age: 46
    },
    {
        name: "Jade",
        age: 19
    },
    {
        name: "Jim",
        age: 12
    }
];

function getOldest(array) {
    let oldestCurrent;
    for (let i = 0; i < array.length; i++) {
        let person = array[i];
        if (oldestCurrent) {
            if (person.age > oldestCurrent.age) {
                oldestCurrent = person;
            }
        } else {
            oldestCurrent = person;
        }
    }
    return oldestCurrent.name;
}

console.log(getOldest(people));