
// ITCS227 Source Code Template for 2T AY 2022-2023
/* 
    Program:        Computation of Grades using Function
    Programmer:     Angelica Ysabel Buan
    Section:        BCS24
    Start Date:     April 19, 2023
    End Date:       April 19, 2023
*/

//1. The program should prompt the user to enter the grades of five students
var prompt = require('prompt-sync')();

// function To compute class participation. It will accept 5 Enabling assessment and compute the average
function ClassParticipation() {
    enablingAssessments = []

    //2. The program should use a for loop to read the grades of each student using the input 
    for (let i = 0; i < 5; i++) {
        let enablingAssessmentGrades = prompt(`Enter enabling assessment ${i + 1}: `)

        // will check if there is an input and if it is a number. If not it will prompt again
        while (isNaN(enablingAssessmentGrades) || enablingAssessmentGrades == "") {
            console.log('Please enter a valid number.');
            enablingAssessmentGrades = prompt(`Enter enabling assessment ${i + 1}: `);
        }
      
        enablingAssessments.push(parseFloat(enablingAssessmentGrades))   
    }
     //for computation of grades
    var sumOfGrades = 0;
    for (let i = 0; i < enablingAssessments.length; i++) {
        sumOfGrades += enablingAssessments[i];
      
    }
    averageOfEnabling = sumOfGrades / enablingAssessments.length;
    return Math.round(averageOfEnabling);
       
     }


// function To compute summative Grade. It will accept 3 summative and compute the average
function SummativeGrade() {
    let summativeAssessments = [];

    for (let i = 0; i < 3; i++) {
        let summativeAssessmentGrades = prompt(`Enter summative assessment ${i + 1}: `)

        // will check if there is an input and if it is a number. If not it will prompt again
        while (isNaN(summativeAssessmentGrades) || summativeAssessmentGrades == "") {
            console.log('Please enter a valid number.');
            summativeAssessmentGrades = prompt(`Enter summative assessment ${i + 1}: `);
        }
        summativeAssessments.push(parseFloat(summativeAssessmentGrades))   
      
    }
    //for computation of grades
    var sumOfGrades = 0;
    for (let i = 0; i < summativeAssessments.length; i++) {
        sumOfGrades += summativeAssessments[i];  
    }
    
    averageOfSummative = sumOfGrades / summativeAssessments.length;
    return Math.round(averageOfSummative);
     }



// function for exam grade
function ExamGrade() {
   
        let examGrades = prompt('Enter exam grade: ')

         // will check if there is an input and if it is a number. If not it will prompt again
         while (isNaN(examGrades) || examGrades == "") {
        console.log('Please enter a valid number.');
             examGrades = prompt('Enter exam grade: ');      
    }  
    
    return Math.round(examGrades);
     }

    
     
function ComputeGrade(classParticipation,summativeGrade,examGrade){
    let grade = (classParticipation * .30) + (summativeGrade * .30) + (examGrade * .40);

    return Math.round(grade);
}


//3. The program should use if-elif-else statements to calculate the letter grade for each
function calculateLetterGrade(grade) {
    if (grade >= 90 && grade <= 100) {
        return "A"
    }
    else if (grade >= 80 && grade <= 89)
    {
        return "B";
    } else if (grade >= 70 && grade <= 79)
    {
        return "C";
    } else if (grade >= 60 && grade < 69)
    {
        return "D";
    } else
    {
        return "F";
    }

}


//Stretch goal: Show the result in a table form.
//FOR TABLE FORM
var Table = require('cli-table');

var tableOfResults = new Table({
    head: ['Name of Students', 'Class Participation', 'Summative Assessment', 'Exam Grade', 'Grade Score', 'Letter Grade']
});

for (let i = 0; i < 5; i++) { 

    let studentName = prompt("Enter the name of the student: ");
    let classParticipation = ClassParticipation();
    let summativeGrade = SummativeGrade();
    let examGrade = ExamGrade();
    let grade = ComputeGrade(classParticipation,  summativeGrade, examGrade);
    let letterGrade = calculateLetterGrade(examGrade);
   
    

    tableOfResults.push([studentName,classParticipation,summativeGrade, examGrade, grade, letterGrade])


}
console.log(tableOfResults.toString());

