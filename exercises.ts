//union types ex1
type IDType = number | string //OR, this is a union type meaning a value can have more than 1 possible type

const showID = (code: IDType) => {
    console.log("Your ID is:", code)
}
showID(123);
//showID(abc);

//ex2
type Fruit = "apple" | "banana" | "orange"; //this is union of string literals, value can only be one of these 3

const eatFruit = (Fruit: Fruit) => { // (fruit: fruit) is parameter list
    console.log("You ate an..." + Fruit);
};
eatFruit("apple");

//ex3
type Result = true | false;

const printResult = (Result: Result) => {
    if(Result=== true) {
        console.log("Pass")
    }else {
    console.log("Fail")
    }
}
printResult(true);

//Interfaces and Type Aliases (type aliases means it lets you give a name to a type so I can reeuse it everywhere)
//ex1
interface Book {
    title: string; //these are my properties
    pages: number;
}
const describeBook = (book: Book) => {
    console.log(`The book ${book.title} has ${book.pages} pages.`);
};
const favoriteBook: Book = { title: "om alla katter i världen försvann", pages: 232 };
describeBook(favoriteBook);

//ex2
interface Teacher {
    name: string;
    subject: string;
}
interface Employee {
    id: number;
    email: string;
}
type SchoolTeacher = Teacher & Employee;

const printTeacherInfo = (schoolteacher: SchoolTeacher) => {
    console.log(`name: ${schoolteacher.name}, subject: ${schoolteacher.subject}, id: ${schoolteacher.id}, email: ${schoolteacher.email}`)
}
const michiel: SchoolTeacher = {name: "Michiel", subject: "back-end", id: 1, email: "michiel@sundsgarden.se"

}
printTeacherInfo(michiel);

//ex3
enum Role {
    Admin = "you have full access",
    User = "You have limited access",
    Guest = "You have guest access",
}
const printRole =(role: Role) => {
    if(role === Role.Admin) {
        console.log("You have full access");
    } else if (role === Role.User) {
        console.log("You have limited access");
    } else if (role === Role.Guest) {
        console.log("You have guest access");
    }
}