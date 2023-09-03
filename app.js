const msg= 'Hello, there'
const studentName1= 'Jemish'
const studentName2= 'John'

//student name is parameter
// function greetTheStudent(studentName){

//     return `Hello There!, ${studentName}`
// }


// const greetTheStudent= function(studentName){// Anonymous Function
// return `Hello There!, ${studentName}`
// }

// const greetTheStudent = (studentName)=>{// fat arrow function
//     return `Hello There!, ${studentName}`
// }

// const greetTheStudent = (studentName)=> `Hello There!, ${studentName}`

// const greetingMessages= greetTheStudent('Jemish') // Jemish is an argument

const fullName= (fname, mname, lname)=>`${fname} ${mname} ${lname}`


const output= fullName('Jemish', 'K', 'Italiya')
console.log(output);
// console.log(msg)
// console.log(msg+', '+studentName1)
// console.log(msg+', '+studentName2)
