var isBegineer = true;
var myName = 'Sahil';
var total = 10;
var sentence = "My name is ".concat(myName, ".\nI am leanrning TypeScript");
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
console.log(list1, list2);
var person1 = ['Sahil', 23];
var Food;
(function (Food) {
    Food[Food["Momo"] = 3] = "Momo";
    Food[Food["Burger"] = 4] = "Burger";
    Food[Food["Pizza"] = 6] = "Pizza";
})(Food || (Food = {}));
var f1 = Food.Burger;
console.log(f1);
var randomValue = 10;
randomValue = "string";
randomValue = true;
// randomValue.name
// randomValue()
var value = 'abc';
// value.name  the unknown type makes sure that the defined object is not a class or a function adn throws error but we can implement some methods to overcome them
// value()
console.log(typeof value);
console.log(value.toUpperCase());
var manyType;
manyType = 10;
manyType = 'avc';
