class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
};

class Employee extends Person{
    constructor(name, surname, job, salary){
        super(name, surname)

        this.job = job;
        this.salary = salary;
    }
    getData() {
        return this.name + " " +this.surname + ", salary:" + this.salary;
    }

    getSalary() {
        return this.salary;
    }

    increaseSalary() {
        this.salary += (this.salary * 0.1);
    }
}

class Developer extends Employee{
    constructor(name, surname, job, salary, specialization){
        super(name, surname, job, salary)

        this.specialization = specialization;
    }

    getSpecialization() {
        return this.specialization;
    }
}

class Manager extends Employee{
    constructor(name, surname, job, salary, department){
        super(name, surname, job, salary)

        this.department = department;
    }

    getDepartment() {
        return this.department;
    }

    changeDepartment(department) {
        this.department = department || "undefined";
    }
}

var person1 = new Person("Milan", "Stankovic");
var empolyee1 = new Employee("Milan", "Stankovic", "English Teacher", 1000);
var dev = new Developer("Milan", "Stankovic", "English Teacher", 1000, "Online Education");
var manager = new Manager("Milan", "Stankovic", "developer", 10000, "HR");

console.log(manager.getDepartment());
empolyee1.increaseSalary();
console.log(empolyee1);


