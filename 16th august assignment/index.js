let sdetails={
name:"Sidharth",
age:22,
grade:77,
subjects:["English","Hindi","Maths","SST","Science"]
}
function displayinfo()
{
    console.log(sdetails)
}
displayinfo();
function displayInfo(message) {
    console.log(`${message} Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
}

const boundDisplayInfo = displayInfo.bind(sdetails);
boundDisplayInfo('Student Info:');

function displayInfoWithMessage(message,Message2) {
    console.log(`${message} ${Message2} Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
}

displayInfoWithMessage.apply(sdetails, ['Student Info:', 'Extra Info: City:Jammu,']);


displayInfoWithMessage.call(sdetails, 'Student Details:', 'Additional Details: Country:India, Nationality:Indian,');


function processSubjects(subjects, call) {
    subjects.forEach(subject => call(subject));
}
function Subjects(subject) {
    console.log('Subject:', subject);
}

processSubjects(sdetails.subjects, Subjects);
function doubleGrades() {
    const originalGrade = sdetails.grade;
    const doubledGrade = originalGrade * 2;
    console.log('Original Grade:', originalGrade);
    console.log('Doubled Grade:', doubledGrade);
}
doubleGrades();

function passingsubjects(threshold) {
    const pass = sdetails.grade >= threshold ? sdetails.subjects : [];
    console.log(`Subjects where grade is above ${threshold}:`, pass);
}
passingsubjects(50);