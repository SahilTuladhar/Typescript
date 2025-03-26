var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.empName));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName, money) {
        var _this = _super.call(this, managerName) || this;
        _this.salary = money;
        return _this;
    }
    Manager.prototype.intro = function () {
        console.log("Hi ".concat(this.empName, " , i earn ").concat(this.salary));
    };
    return Manager;
}(Employee));
var emp1 = new Employee('Sahil');
console.log(emp1.empName);
emp1.greet();
var m1 = new Manager('messi', 12000);
console.log(m1.empName);
m1.intro();
m1.greet();
