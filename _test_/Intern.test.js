const Intern = require("../lib/Intern");

test("Set School", () => {
    const testValue = "USC";
    const employee = new Intern("James", 1, "james@baller.com", testValue);
    expect(employee.school).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("James", 1, "james@baller.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Get School", () => {
    const testValue = "USC";
    const employee = new Intern("James", 1, "james@baller.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});

