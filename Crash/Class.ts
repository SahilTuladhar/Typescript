

class Employee{
     public empName: string;

     constructor(name:string){
        this.empName = name
     }

     greet(){
        console.log(`Good Morning ${this.empName}`);
     }
    
}

class Manager extends Employee{
    
    salary : number


    constructor(managerName: string , money : number){
        super(managerName);
        this.salary = money

    }
    
    intro(){
        console.log(`Hi ${this.empName} , i earn ${this.salary}`);
        
    }
}

let emp1 = new Employee('Sahil')
console.log(emp1.empName);
emp1.greet()

let m1 = new Manager('messi' , 12000)
console.log(m1.empName);
m1.intro()
m1.greet()

