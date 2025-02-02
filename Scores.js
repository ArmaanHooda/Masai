let scores = [35, 85, 92, 40, 58, 78, 28, 95, 60, 47];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < 40) {
    scores[i] += 20;
  }
  if (scores[i] > 90) {
    scores[i] = 90;
  }
}
let passedCount = scores.filter(score => score >= 50).length;
console.log("Number of students who passed:", passedCount);

console.log("Final adjusted scores:", scores);