/*
Basic Algorithm Scripting: Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

//Solution two

function findElement(arr, func) {                                       //1
  return arr.find(func);                                                //2
}
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));


//Notes
/*
//1    This function takes in two arguments
            1. an array 
            2. a function to be performed on the array

//2    
        The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
        Source - [https://devdocs.io/javascript/global_objects/array/find]

        In this case the find method takes in the testing function `num => num % 2 === 0` and returns '2' as the first truthy value. 


*/

