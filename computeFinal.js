exports.getFinalGrade = function(hwGrade, examGrade){
    if(hwGrade == -1 || examGrade == -1){
        return "ERROR! Invalid grade put in homework or exams.";
    }

    //Compute final exam grade by adding the two functions together
    var betaExamGrade = hwGrade + examGrade;

    //Now we need a way to round the function up if it goes above .5

    if(betaExamGrade + 0.5 > Math.floor(betaExamGrade) + 1){
        betaExamGrade = Math.floor(betaExamGrade) + 1;
    }

    return betaExamGrade;
}