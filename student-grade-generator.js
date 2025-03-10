function getStudentGrade() {
    let marks = parseFloat(prompt("Enter student marks"));

    if (isNaN(marks) || marks < 0 || marks > 100){
        console.log("Invalid Input!")
        return;
    }

    let grade;
    if (marks > 79){
        grade = 'A';
    }else if (marks >= 60){
        grade = 'B';
    }else if (marks >= 50){
        grade = 'C';
    }else if (marks >= 40){
        grade = 'D';
    }else{
        grade = 'E';
    }

    console.log(`The student's grade is: ${grade}`)
}

getStudentGrade();