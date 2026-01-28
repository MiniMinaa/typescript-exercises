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