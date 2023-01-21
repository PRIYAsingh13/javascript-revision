// call is pridefined method in javascript
// call() method takes arguments separateley

// ========= call() =======

// let student = {
//     Name : "priya",
//     rollNo : 55,
// }
// let teacher = {
//     name : "vinay",
//     rollNo : 66,
// }
//  function printDetails(){
//     return (this.name)
// }
// function chooseSub(sub1,sub2){
//     console.log(sub1,sub2)
// }
// console.log(printDetails.call(student,'math',"english"))
// printDetails.call(teacher)
// printDetails.apply(student)

// ======== apply() =======

// let student = {
//     Name : "priya",
//     rollNo : 55,
// }
// let teacher = {
//     name : "vinay",
//     rollNo : 66,
// }
//  function printDetails(){
//     return (this.name)
// }
// function chooseSub(sub1,sub2){
//     return [sub1,sub2]
// }
// console.log(printDetails.call(teacher,['math',"english"]))

// ========== bind() ======


let student = {
    Name : "priya",
    rollNo : 55,
}
let teacher = {
    name : "vinay",
    rollNo : 66,
}
 function printDetails(){
    return (this.name)
}
function chooseSub(sub1,sub2){
    console.log(sub1,sub2)
}
let callAnotherTime = printDetails.call(student)

console.log(callAnotherTime())