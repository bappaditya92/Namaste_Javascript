//with this json json can you perform map,set,flatmap,reduce,filter,forEach operation in Javascript
// const jsonData = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 28,
//       skills: ["JavaScript", "React", "Node.js"],
//       scores: { math: 80, science: 85 },
//       active: true,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 34,
//       skills: ["Python", "Django", "Machine Learning"],
//       scores: { math: 90, science: 95 },
//       active: false,
//     },
//     {
//       id: 3,
//       name: "Sam Wilson",
//       age: 25,
//       skills: ["HTML", "CSS", "JavaScript"],
//       scores: { math: 70, science: 75 },
//       active: true,
//     },
//   ];
  


/*
1. map
What it does:
The map() method creates a new array by applying a function to each element of the original array. It's often used to transform data.

Example:
Extract all user names.


const names = jsonData.map((user) => user.name);
console.log(names);
// Output: ["John Doe", "Jane Smith", "Sam Wilson"]

Explanation:

map() iterates over the jsonData array.
For each user object, it applies the function user.name to return only the name property.
A new array of names is created.
*/



/*
Set

What it does:
A Set is used to store unique values. It automatically removes duplicates.

Example:
Find all unique skills from the data.

const allSkills = jsonData.flatMap((user) => user.skills);
const uniqueSkills = new Set(allSkills);
console.log(uniqueSkills);
// Output: Set { "JavaScript", "React", "Node.js", "Python", "Django", "Machine Learning", "HTML", "CSS" }


Explanation:

First, we extract all skills using flatMap() (explained later). This gives us an array with duplicates.
We pass this array to new Set(). A Set only keeps unique values, removing duplicates automatically.
To convert the Set back to an array:

const uniqueSkillsArray = Array.from(uniqueSkills);
console.log(uniqueSkillsArray);
// Output: ["JavaScript", "React", "Node.js", "Python", "Django", "Machine Learning", "HTML", "CSS"]


*/



/*
flatMap
What it does:
The flatMap() method applies a function to each element, then flattens the results into a single array. It combines map() and flat() in one step.

Example:
Flatten the skills array for all users.

const flatSkills = jsonData.flatMap((user) => user.skills);
console.log(flatSkills);
// Output: ["JavaScript", "React", "Node.js", "Python", "Django", "Machine Learning", "HTML", "CSS", "JavaScript"]


Explanation:

Each user’s skills is an array.
flatMap() extracts these arrays and combines them into a single array.
*/



 /*
 reduce

 What it does:
The reduce() method reduces an array into a single value by applying a function iteratively. It's commonly used for summing values or aggregating data.

Example:
Calculate the total math score for active users.

const totalMathScore = jsonData
  .filter((user) => user.active) // Filter active users
  .reduce((sum, user) => sum + user.scores.math, 0); // Add their math scores
console.log(totalMathScore);
// Output: 150



Explanation:

filter() ensures we only include active users.
reduce() starts with an initial value (0) and adds each active user’s math score (sum + user.scores.math).
On each iteration, it accumulates the total math score.
 */


/*
filter

What it does:
The filter() method creates a new array by including only elements that meet a condition.

Example:
Get users above 30 years of age.

const usersAbove30 = jsonData.filter((user) => user.age > 30);
console.log(usersAbove30);
/*
Output:
[
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    skills: ["Python", "Django", "Machine Learning"],
    scores: { math: 90, science: 95 },
    active: false,
  }
]


Explanation:

The filter() function checks each user’s age.
If the condition user.age > 30 is true, that user is included in the new array.
*/


/*
forEach
What it does:
The forEach() method is used to perform an operation for each element. It doesn’t return anything but is useful for logging or applying side effects.

Example:
Print each user’s name.

jsonData.forEach((user) => {
  console.log(user.name);
});
// Output:
// John Doe
// Jane Smith
// Sam Wilson


Explanation:

forEach() iterates over the array and executes the provided function for each user.
In this case, it logs each user’s name to the console.
*/


/*
Combined Example
Let’s solve a problem using a combination of these methods:

Problem:
Find all unique skills of active users and sort them alphabetically.

Solution:

const activeUserSkills = Array.from(
  new Set(
    jsonData
      .filter((user) => user.active) // Step 1: Filter active users
      .flatMap((user) => user.skills) // Step 2: Extract and flatten skills
  )
).sort(); // Step 3: Sort alphabetically

console.log(activeUserSkills);
// Output: ["CSS", "HTML", "JavaScript", "Node.js", "React"]

const activeUserSkills = Array.from(
  new Set(
    jsonData
      .filter((user) => user.active) // Step 1: Filter active users
      .flatMap((user) => user.skills) // Step 2: Extract and flatten skills
  )
).sort(); // Step 3: Sort alphabetically

console.log(activeUserSkills);
// Output: ["CSS", "HTML", "JavaScript", "Node.js", "React"]



Step-by-step Explanation:

filter(): Only include active users.
flatMap(): Combine the skills arrays into a single array.
Set: Remove duplicate skills.
Array.from(): Convert the Set back into an array.
sort(): Alphabetically sort the skills.


map()	Transform each element of an array into a new value (e.g., extract name).
Set	Remove duplicates from an array.
flatMap()	Flatten nested arrays into one array.
reduce()	Aggregate data into a single value (e.g., sum, average, etc.).
filter()	Extract elements based on a condition.
forEach()	Perform side effects (e.g., logging or updates) without returning a value.




*/