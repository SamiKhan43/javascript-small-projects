function getLetterGrade(score){
    if(score >=90 ){
        return "A";
    }
    else if(score >= 80){
        return "B";
    }
    else if(score >= 70){
        return "C";
    }
    else if(score >= 60){
        return "D";
    }
    else {
        return "F";
    }
}

function hasPassed(score){
    return score >= 60;
}

function getFeedback(grade){
    if(grade === "A"){
        return "Excellent work";
    }
    else if(grade === "B"){
        return "Good Job";

    }
    else if(grade === "C"){
        return "You Passed";

    }
    else if(grade === "D"){
        return "You Passed";
    }
    else {
        return "Keep Practicing";
    }
}

function createGradeReport(name,score){
    const grade = getLetterGrade(score);
    const passed = hasPassed(score);
    const feedback = getFeedback(grade);

    return `
    -----------------------
    Student Name: "${name}"
    Score: "${score}"
    Grade: "${grade}"
    Passed: "${passed ? "Yes" : "No"}"
    Feedback: "${feedback}"
    -----------------------
    `.toUpperCase();
}

console.log(createGradeReport('ali', 92));
console.log(createGradeReport('farhan', 48));
console.log(createGradeReport('subhan', 75));
console.log(createGradeReport('sam', 20));