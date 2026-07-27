class student {
    constructor(student_name, age, phoneNo) {
        this.student_name = student_name;
        this.age = age;
        this.phoneNo = phoneNo;
    }
    static name = "Playwright2x";
    static mentor_name = "Prammod Dutta";
    static display() {
        console.log("Hi, I am common f(n)");
    }
}
const s1 = new student("Yash", 27, 987654321);
const s2 = new student("Khushi", 19, 9252415331);

console.log(s1.student_name);
console.log(s2.student_name);

console.log(student.name);
console.log(student.mentor_name);



