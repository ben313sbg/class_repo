// // map method example
// // The map() method creates a new array with the results of calling a provided function on every element in the calling array.  It does not change the original array.
const numbers = [10, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

// //filter method example
// // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const numbersTotest = [1, 2, 3, 4, 5];
const evens = numbersTotest.filter((number) => number % 2 === 0);

// //reduce method example
// // The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const array1 = [1, 2, 3, 4, 5];
const sum = array1.reduce((acc, number) => acc + number, 0);

// //ForeEach method example
// // The forEach() method executes a provided function once for each array element.
const array2 = [1, 2, 3, 4, 5];
array2.forEach((number) => console.log(number));

//Async and Await
// The async function declaration defines an asynchronous function, which returns an AsyncFunction object.  The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong, please try again later.", error);
  }
}

fetchUsers();