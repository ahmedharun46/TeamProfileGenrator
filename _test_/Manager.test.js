const Manager = require('../lib/Manager');

test ("set office number", () => {
    const testValue = 5
    const employee = new Manager("James", 1, "james@baller.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Manager";
    const employee = new Manager("James", 1, "james@baller.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test ("get office number", () => {
    const testValue = 5
    const employee = new Manager("James", 1, "james@baller.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});