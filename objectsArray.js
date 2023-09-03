let customers = []

let customer1 = {
    name:'John',
    age:27,
    address:'xyz street',
    gender:'M'
}
let customer2 = {
    name:'Laura',
    age:28,
    address:'TT station',
    gender:'F'
}

customers.push(customer1)

customers.push(customer2)


customers.map((item)=>console.log(item.age))

console.log(customers);