'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`);
}

console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push('Faith');
studentScores.push(88);

studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

const danielIndex = studentNames.indexOf('Daniel');

studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);

console.log('\nPART D: CLASS STATISTICS');

const totalScore = studentScores.reduce((sum, score) => sum + score, 0);

const averageScore = totalScore / studentScores.length;

let highestScore = studentScores[0];
for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] > highestScore) {
    highestScore = studentScores[i];
  }
}

let lowestScore = studentScores[0];
for (let i = 1; i < studentScores.length; i++) {
  if (studentScores[i] < lowestScore) {
    lowestScore = studentScores[i];
  }
}

console.log('Total Score:', totalScore);
console.log('Average Score:', averageScore.toFixed(2));
console.log('Highest Score:', highestScore);
console.log('Lowest Score:', lowestScore);

console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

const passingScores = studentScores.filter(score => score >= passingScore);

const passFailStatuses = studentScores.map(score => (score >= passingScore ? 'Passed' : 'Failed'));

const atLeastOneFailed = studentScores.some(score => score < passingScore);

const allPassed = studentScores.every(score => score >= passingScore);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', passFailStatuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allPassed);

console.log('\nPART F: SORT AND SEARCH');

const sortedScoresCopy = Array.from(studentScores);

sortedScoresCopy.sort((a, b) => b - a);

const contains91 = sortedScoresCopy.includes(91);
const indexOf91 = sortedScoresCopy.indexOf(91);

console.log('Scores from Highest to Lowest:', sortedScoresCopy);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

for (let row = 0; row < activityScores.length; row++) {
  let rowTotal = 0;
  for (let col = 0; col < activityScores[row].length; col++) {
    console.log(`${originalNames[row]} - Activity ${col + 1}: ${activityScores[row][col]}`);
    rowTotal += activityScores[row][col];
  }
  const rowAverage = rowTotal / activityScores[row].length;
  activityAverages.push(rowAverage);
  console.log(`${originalNames[row]}'s activity average: ${rowAverage.toFixed(2)}`);
}

console.log('Activity Averages:', activityAverages);

console.log('\nPART H: TEXT SUMMARY');

console.log('Students: ' + studentNames.join(' | '));
