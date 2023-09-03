let name='Jemish'
let age = 23

function ageOfStudent(name,age){
    return `Age of ${name} is ${age}`
}

const TestingParameter=function(name,age,func){
    return func(name,age)
}
console.log(TestingParameter('Jemish',23,ageOfStudent));