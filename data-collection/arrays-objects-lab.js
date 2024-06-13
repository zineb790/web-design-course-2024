let arrayOfArrays = [["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]];
 
let arrayOfObjects = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];
// Remove the last element from the sorted array.
arrayOfObjects.pop();
console.log(arrayOfObjects);
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

arrayOfObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log(arrayOfObjects);

// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

arrayOfObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(arrayOfObjects);

// So far, the results should look like this:

// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//  { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
 


