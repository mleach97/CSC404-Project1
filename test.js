let cHW = require('./computeHW');
let cEG = require('./computeExam');
let cFE = require('./computeFinal');

//here you can test values
console.log(cHW.computeHW(100, 100, 100));//put in three hw grades here
console.log(cEG.computeExams(100, 100));//put in two exam grades here
console.log(cFE.getFinalGrade(20, 80)); 
//first: Hw final hw grade (0 to 20) 
//second: Exam final grade (0 to 80)
