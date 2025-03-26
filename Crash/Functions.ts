
const add = (num1: number , num2?:number):number =>{
    if(num2){
        return num1 + num2
    }else{
        return num1
    }
}

console.log(add(1));
