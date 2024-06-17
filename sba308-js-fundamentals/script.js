// course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// assignment group is an object of an array of objects
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// learner submission data is an array of objects
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  //  processing data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0, // 150 / 150
      isScoreGood: function () {
       const avgThreshold = 0.75;
       if (this.avg > avgThreshold) {
         console.log("you did good");
            return true;
       } else {
         return false;
       }
      
          }
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833, // late: (140 - 15) / 150
     isScoreGood: function () {
       const avgThreshold = 0.75;
       if (this.avg > avgThreshold) {
           console.log("you did good");
            return true;
       } else {
         return false;
       }
          }
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);







// 1-Declare variables properly using let and const where appropriate.
//2-Use operators to perform calculations on variables and literals///
//how we got avg
//for learner_id :125
//for course id 1 and 2
//LearnerSubmissions is an [{{score}},{score}]
//assignmentGroup { [{ possible_point }, {possible_points}, {}] }
//avg: 0.985, // (47 + 150) / (50 + 150)
//accessing and console.log data
console.log(LearnerSubmissions[0].submission.score);
console.log(LearnerSubmissions[1].submission.score);
console.log(AssignmentGroup.assignments[0].points_possible);
console.log(AssignmentGroup.assignments[1].points_possible);

function calculateAvg() {
let testScores=LearnerSubmissions[0].submission.score+LearnerSubmissions[1].submission.score;
let testPossiblePoints=AssignmentGroup.assignments[0].points_possible+AssignmentGroup.assignments[1].points_possible;
    let testAvg = testScores / testPossiblePoints;
    console.log(`the average of the submitted assingment 1 and 2 is :${testAvg}`);
return testAvg;
}
console.log(calculateAvg());

//3-Use strings, numbers, and Boolean values cached within variables.
//4-Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
function isScoreGood(avg) {
    const avgThreshold = 0.75;
    if (avg>avgThreshold) {
        console.log("good work");
        return true;
    } else {
        console.log("needs extra help");
        return false;
    }
}

console.log(isScoreGood(0.45));

//adding switch statment

const checkScore = (score) => {
  switch (true) {
    case (score >= 0.90):
      console.log("Excellent");
      break;
    case (score >= 0.75):
      console.log("Good");
      break;
    case (score >= 0.50):
      console.log("Average");
      break;
    default:
      console.log("Poor");
  }
};
console.log(checkScore(0.76));


//5-Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
// Test the isScoreGood method for each learner
 

//6-Utilize at least two different types of loops.
//===> Testing the isScoreGood method for each learner
result.forEach((learner) => {
  console.log(`Learner ID: ${learner.id}, Is Score Good? ${learner.isScoreGood()}`);
});
for (let i = 0; i <= result.length;i++){

    console.log(result);
}
//7-Utilize at least one loop control keyword such as break or continue.

////8-Create and/or manipulate arrays and objects./////

console.log("manipulating LearnerSubmissions array: ");
console.log("accessing last element")
// ===> accessing last element of the array score.
console.log(LearnerSubmissions[LearnerSubmissions.length - 1].submission.score);
console.log("adding new object using push:")
//===>adding new object to my array using push 
const newLearner=LearnerSubmissions.push={name:"hello i am a new learner"}
console.log(newLearner);
console.log(LearnerSubmissions);
console.log("adding to index 0  :")
//add an object to the start of the array using unshift
const addNewObjectToStart = LearnerSubmissions.unshift({name :'i am first learner'})
console.log(addNewObjectToStart);
console.log(LearnerSubmissions);
console.log("removing from index 0 :")
//===>removing the first object using shift
const removeFirstObject = LearnerSubmissions.shift();
console.log(removeFirstObject);
console.log(LearnerSubmissions);




//9-Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
//10-Use functions to handle repeated tasks.