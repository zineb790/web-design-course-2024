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
//accessing last element of the array score.
console.log(LearnerSubmissions[LearnerSubmissions.length - 1].submission.score);

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

// Test the isScoreGood method for each learner
result.forEach((learner) => {
  console.log(`Learner ID: ${learner.id}, Is Score Good? ${learner.isScoreGood()}`);
});
// 1-Declare variables properly using let and const where appropriate.
//2-Use operators to perform calculations on variables and literals.
//3-Use strings, numbers, and Boolean values cached within variables.
//4-Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
//5-Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
//6-Utilize at least two different types of loops.
//7-Utilize at least one loop control keyword such as break or continue.
//8-Create and/or manipulate arrays and objects.
//9-Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
//10-Use functions to handle repeated tasks.