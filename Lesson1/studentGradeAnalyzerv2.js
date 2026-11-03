class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  
  getAverage() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    return sum / this.scores.length;
  }

  
  getLetterGrade() {
    const average = this.getAverage();

    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}


function analyzeClass(students) {
  console.log("------- STUDENT REPORT -------");

  let classSum = 0;
  let topStudentName = "";
  let topStudentAverage = 0;

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = student.getAverage();
    const letterGrade = student.getLetterGrade();

    console.log(`${student.name} - Average: ${average.toFixed(1)} | Grade: ${letterGrade}`);

    classSum += average;

    if (average > topStudentAverage) {
      topStudentAverage = average;
      topStudentName = student.name;
    }
  }

  const classAverage = classSum / students.length;

  console.log("-----------------------------------");
  console.log(`Class Average: ${classAverage.toFixed(1)}`);
  console.log(`Top Student: ${topStudentName} with ${topStudentAverage.toFixed(1)}`);
}


const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];


const students = studentData.map(data => new Student(data.name, data.scores));


analyzeClass(students);
