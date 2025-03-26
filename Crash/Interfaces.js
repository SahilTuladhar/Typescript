function Introduction(person) {
    console.log("My Name is ".concat(person.firstName, " ").concat(person.lastName, " and my age is ").concat(person.age));
}
var p = {
    firstName: 'Sahil',
    // lastName:'tuladhar',
    age: 22
};
Introduction(p);
