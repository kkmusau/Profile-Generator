//
const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Jane";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});


test("Can set id via constructor argument", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.id).toBe(testValue);
});


test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.email).toBe(testValue);
});

//Gets Name from getName()
test("Can get name via getName()", () => {
    const testValue = "Jane";
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

//Gets Id from getId()
test("Can get id via getId()", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.getId()).toBe(testValue);
});

//Gets email from getEmail()
test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

//Gets the role from getRole()
test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employee = new Employee("Jane", 1, "test@test.com");
    expect(employee.getRole()).toBe(testValue);
});