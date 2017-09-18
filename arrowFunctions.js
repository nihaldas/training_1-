
/*-- arrow functions */ 

let square = x => x*x ; 
let add = (x,y) => x+y ; 
let big = (x,y) => (x>y)?x:y ; 

let result = (x,y,z) => (x>=35 && y>=35 && z>= 35)?"PASS":"FAIL";

let display = x => console.log("Hello" +x) ; 

console.log(square(5)) ; 
console.log(add(5,6)) ; 
console.log(big(67,69)) ; 
console.log(result(45,23,100));
display(" Nihal") ; 

var first = x => (x[0]) ; 
var items = ["A","B","C","D","E"]; 
display(first(items)) ; 

var empType = function Employee(id,ename,job,salary) {
    this.id = id; 
    this.ename =ename ; 
    this.job = job ; 
    this.salary = salary;
}