let a: number;
a = 3;
console.log(a);
let userName: string;
userName = "Akshay";
let isTrue: boolean;
isTrue = true;
let hobbies: string[];
hobbies = ["sports", "cooking"];
type Person = {
  name: string;
  age: number;
};
let person: Person = {
  name: "Max",
  age: 23,
};
let people: {
  name: string;
  age: number;
}[];
people = [{ name: "John", age: 25 }];

let peoples: (string | number)[];
peoples = ["Akshay", 23];

function addition(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegining(demoArray, -1);
// updatedArray[0].split("");
