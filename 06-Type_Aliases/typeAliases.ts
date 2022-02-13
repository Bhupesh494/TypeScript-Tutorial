type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logdetails = (uid: StringOrNum, item: String) => {
  console.log(`${item} ${uid}`);
};

const greeting = (user: objWithName) => {
  console.log(`Hello ${user.name} says hello`);
};

const greetAgain = (user: objWithName) => {
  console.log(`Hello ${user.name} says hello again`);
};
