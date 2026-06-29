class Playwright2x {
    static courseName = "Playwright with Javascript";
    static duration = "3 Months";

    static displayCourseInfo() {
        console.log(`Course Name: ${Playwright2x.courseName}, Duration: ${Playwright2x.duration}`);
    }
    constructor(student_name, age, phoneNo) {
        this.student_name = student_name;
        this.age = age;
        this.phoneNo = phoneNo;

    }
    print_detail() {
        console.log(`Name: ${this.student_name}, Age: ${this.age}, Phone No: ${this.phoneNo}`);
    }
}
const s1 = new Playwright2x("Yash", 27, 987654321);
const s2 = new Playwright2x("Khushi", 19, 9252415331);
const s3 = new Playwright2x("Aman", 23, 9354346133);
const s4 = new Playwright2x("Priya", 20, 8765432109);
const s5 = new Playwright2x("Rahul", 25, 7654321098);
const s6 = new Playwright2x("Sneha", 22, 6543210987);
const s7 = new Playwright2x("Amit", 28, 5432109876);
const s8 = new Playwright2x("Deepa", 21, 4321098765);
const s9 = new Playwright2x("Vikas", 24, 3210987654);
const s10 = new Playwright2x("Pooja", 26, 2109876543);

s1.print_detail();
s2.print_detail();
s3.print_detail();
s4.print_detail();
s5.print_detail();
s6.print_detail();
s7.print_detail();
s8.print_detail();
s9.print_detail();
s10.print_detail();

Playwright2x.displayCourseInfo();
