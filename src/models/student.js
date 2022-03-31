export default class Student {
    constructor(student = {
        active: true,
        borrowedBookNum: 0,
        email: "string@mail.com",
        faculty: "string",
        name: "string",
        password: "string",
        phone: "05377895896",
        pinCode: "string",
        surname: "string",
        username: "string"
    }) {
        this.active = student.active;
        this.borrowedBookNum = student.borrowedBookNum;
        this.email = student.email;
        this.faculty = student.faculty;
        this.name = student.name;
        this.password = student.password;
        this.phone = student.phone;
        this.pinCode = student.pinCode;
        this.surname = student.surname;
        this.username = student.username;
    }
};