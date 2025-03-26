let isBegineer: boolean = true;
let myName: string = 'Sahil';
let total: number = 10;


let sentence: string = `My name is ${myName}.
I am leanrning TypeScript`

console.log(sentence);

let list1: number[] = [1,2,3];
let list2: Array<number> = [4,5,6]

console.log(list1 , list2);

let person1: [string , number] = ['Sahil' , 23]

enum Food {Momo = 3 , Burger , Pizza = 6}

let f1: Food = Food.Burger;
console.log(f1);

let randomValue: any = 10;
randomValue = "string"
randomValue = true
// randomValue.name
// randomValue()

let value:unknown = 'abc';
// value.name  the unknown type makes sure that the defined object is not a class or a function adn throws error but we can implement some methods to overcome them
// value()
console.log(typeof value);

console.log(
    (value as string).toUpperCase());



let manyType: string | number;
manyType = 10 
manyType = 'avc'

