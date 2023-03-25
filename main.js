// interface User{
//   name:string
//   age:number,
//   salary? :number,
//   getdata:()=>string
// };
// var student:User={
// name:"shashwat",
// age:21, 
// salary:400000000000000000,
// getdata:()=>student.name
// }
;
function student(p) {
    return "Name " + p.name + " Age " + p.age + " Salary " + p.salary;
}
console.log(student({ name: "shashwat", age: 21, salary: 400000 }));
