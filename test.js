let cHW = require('./computeHW');
let cEG = require('./computeExam');
let cFE = require('./computeFinal');

//here you can test values
console.log(cHW.computeHW(100, 100, 100));
console.log(cEG.computeExams(100, 100));
console.log(cFE.getFinalGrade(20, 80));