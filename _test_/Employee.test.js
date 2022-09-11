const Employee = require('../lib/Employee');

test('makes the employee object', () => {
    const employee = new Employee
    expect(typeof(employee)).toBe("object");
});

test ('Set employee Name', () => {
    const name = "James"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test ('Set employee ID', () => {
    const testId  = 75;
    const employee = new Employee("James", testId);
    expect(employee.id).toBe(testId);
});

test('Set Email', () => {
    const testEmail = "james@baller.com"
    const employee = new Employee("James", 1, testEmail);
    expect(employee.email).toBe(testEmail);
});

test ('Get employee Name', () => {
    const testname = "James"
    const employee = new Employee(testname);
    expect(employee.getName()).toBe(testname);
});

test ('Get employee ID', () => {
    const testId  = 75;
    const employee = new Employee("James", testId);
    expect(employee.getId()).toBe(testId);
});

test('Get Email', () => {
    const testEmail = "james@baller.com"
    const employee = new Employee("James", 1, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("James", 1, "james@baller.com");
    expect(employee.getRole()).toBe(testRole);
});
