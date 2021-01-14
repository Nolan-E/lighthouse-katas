const organizeInstructors = function(instructors) {
  let output = {};

  for (let i = 0; i < instructors.length; i++) {
    let key = instructors[i]["course"];
    if (output[key]) {
      output[key].push(instructors[i]["name"]);
    } else {
      output[key] = [ instructors[i]["name"] ];
    }
  }
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

// should evaluate to :
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }
