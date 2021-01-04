const instructorWithLongestName = function(instructors) {
  let currentLongestLength = 0;
  let currentLongestName = '';

  for (let i = 0; i < instructors.length; i++) {
    // compares each name key length and saves if longer than current.
    // also saves current object to separate variable
    if (instructors[i].name.length > currentLongestLength) {
      currentLongestLength = instructors[i].name.length;
      currentLongestName = instructors[i];
    }
  }
  return currentLongestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));