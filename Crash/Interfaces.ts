function Introduction(person : Person){
  console.log(`My Name is ${person.firstName} ${person.lastName} and my age is ${person.age}`);
}

interface Person{
    firstName : string,
    lastName? : string,
    age : number
}

let p = {
    firstName : 'Sahil' , 
    // lastName:'tuladhar',
    age : 22
}

Introduction(p)