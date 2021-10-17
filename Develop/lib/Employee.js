class Employee {
    constructor(name, id, email, role = 'Employee') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, 'Engineer');
        this.officeNumber = officeNumber;
    }

}

module.exports = Employee;

