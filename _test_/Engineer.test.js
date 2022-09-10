const Engineer = require('../lib/Engineer');

test("setting up github", () => {
    const testValue = "GitHub User";
    const employee = new Engineer("James", 1, "james@baller.com", testValue);
    expect(employee.github).toBe(testValue);
});

test("getRole function", () => {
    const testValue = "Engineer";
    const employee = new Engineer("James", 1, "james@baller.com", testValue);
    expect(employee.getRole()).toBe(testValue);
});

test("Get github", () => {
    const testValue = "GitHub User";
    const employee = new Engineer("James", 1, "james@baller.com", testValue);
    expect(employee.getGitHub()).toBe(testValue);
});