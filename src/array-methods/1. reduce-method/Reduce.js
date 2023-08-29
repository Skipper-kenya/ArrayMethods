//=> Reduce method is a javascript array method that takes in an array of values.

//=> It reduces the array of values to a single value by returning the value itself.

//Assume we have this array.
const test1_array = [1, 2, 3, 4, 5];

//=> our aim is to reduce the above array to a single value which is the sum of 1,2,3,4 and 5.

//Follow me below

const sum = test1_array.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

//Accumulator is the sum of the numbers after every loop/iteration
//during the first iteration the accumulator is set to the starting point 0

//=> the  method returns the accumulated sum + current sum

//HERE'S ANOTHER EXAMPLE BELOW

const house_appliances = [
  { name: "Woofer", price: 4000 },
  { name: "laptop", price: 15000 },
  { name: "extension", price: 150 },
  { name: "mouse", price: 150 },
  { name: "gas-cooker", price: 4000 },
];

//=> our aim is to calculate the total price of our apliances using the reduce method.

const appliances_price = house_appliances.reduce((totals, appliance) => {
  return totals + appliance.price;
}, 0);

console.log(appliances_price); // 23300
