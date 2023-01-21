// let arr = [2,4,5,8]

// let arr1 = []

// for(let i=0;i<arr.length;i++){
//     arr1[i] = arr[i]*2;
// }
// console.log(arr1)

// ========= map() =======

// let arr = [2,4,5,8]

// let arr1 = arr.map(function(val){
//     return val * 3;
// })
// console.log(arr1)

// ======= 2======

// let arr1 = arr.map((val) => val * 3)
// console.log(arr1)

// =========== Filter() =========

// let arr = [4,6,8,5,9,1,0];

// ========arrow========

// let arr1 = arr.filter(val => val > 5);
// console.log(arr1)

// =======anonymous======

// let arr1 = arr.filter(function(val){
//     return val>5;
// })
// console.log(arr1)



// ===========obj========

// let team = [
// {
//     name : "priya",
//     position : "developer"
// },
// {
//     name : "priya1",
//     position : "developer"
// },
// {
//     name : "priya2",
//     position : "developerr"
// },
// {
//     name : "priya3",
//     position : "developer"
// },

// ];

// let arr1 = team.filter(val => val.position == "developer")
// console.log(arr1)

// ========== reduce() ==========

let arr = [1,4,6,8,9]

let arr1 = arr.reduce((h1,h2) =>{
    return h1+h2;
})
console.log(arr1)

// const reduce =(h1,h2)=>{
//     return h1+h2
// }
// let arr1 = arr.reduce(reduce)

// console.log(arr1)