// arrays
// * based on the types of value in the list at the time of creation it set it's type.
let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// ! names.push(3);
// ! names[1] = 3;

let numbers = [10, 20, 12, 15];

numbers.push(25);
// ! numbers.push('shaun');
// ! numbers[0] = 'shaun';

// * if you add multiple types then list will support multiple type
let mixed = ["ken", 4, "chun-li", 8, 9];

mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
// ! mixed.push = true;

// objects
//  * After declaring the object we cannot add a new property and structure or change there type
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "ryu";
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']

ninja = {
  name: "yoshi",
  belt: "orange",
  age: 40,
  // skills: ['running'],
};
