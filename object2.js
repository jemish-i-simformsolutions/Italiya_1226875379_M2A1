//creating customer object with various proeperty
let customer = {
    fname:'John',
    lname:'shelby',
    age:24,
    education:'Masters',
    //here into is a function which handles various values
    intro:function(){

        return `My self ${this.fname} ${this.lname}, I am ${this.age} year old I am ${this.education} student`

    }
}

console.log(customer['lname'])
console.log(customer.fname)
console.log(customer.intro())