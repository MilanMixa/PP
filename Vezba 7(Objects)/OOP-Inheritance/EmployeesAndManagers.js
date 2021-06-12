function Person (name, surname){
    this.name = name;
    this.surname = surname;
}

var person1 = new Person("Milan", "Stankovic");
console.log(person1);




function Employee (name, surname, job, salary){
    Person.call(this, name, surname)
    this.job = job;
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function (){
    return this.name + " " +this.surname + ", salary:" + this.salary;
} 

Employee.prototype.getSalary = function (){
     console.log(this.salary);
} 

Employee.prototype.increaseSalary = function (){
    this.salary += (this.salary * 0.1);
} 

var empolyee1 = new Employee("Milan", "Stankovic", "English Teacher", 1000);
console.log(empolyee1.increaseSalary());
console.log(empolyee1);





function Developer ( name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary)
    this.specialization = specialization;  
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function (){
    console.log(this.specialization);
}

var dev = new Developer("Milan", "Stankovic", "English Teacher", 1000, "Online Education");
console.log(dev.getSpecialization());
console.log(dev.hasOwnProperty("getSpecialization")); // mora da se prosledi pod navodnicima
console.log(dev);



function Manager (name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary)
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function(){
    console.log(this.department);
}

Manager.prototype.changeDepartment = function(department){
    this.department = department || "undefined";
}

var manager = new Manager("Milan", "Stankovic", "developer", 10000, "HR");
console.log(manager.changeDepartment("developer"));
console.log(manager);