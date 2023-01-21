// call is pridefined method in javascript
// call() method takes arguments separateley

// ========= call() =======

let student = {
    Name : "priya",
    rollNo : 55,
}
let teacher = {
    name : "vinay",
    rollNo : 66,
}
let printDetails = function(){
    console.log(this)
}
// printDetails.call(student)
// printDetails.call(teacher)
printDetails.apply(student)