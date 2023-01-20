// const hof = (name) =>{
//     if(name === "priya"){
//         return function(topic){
//             console.log(`hii ${name}. What is ${topic}?. plz explain us.`)
//         }
//     }if(name === "singh"){
//         return function(topic){
//             console.log(`hii ${name}. What is ${topic}?. plz explain us.`)

//         }
//     }if(name === "Aircampus"){
//         return function(topic){
//             console.log(`hii ${name}. What is ${topic}?. plz explain us.`)

//         }
//     }else{
//         return function(){
//             console.log("hof function")
//         }
//     }
// }

// // const print1 = hof("priya");
// // print1("UI")

// hof("priya")("UI")
// hof("singh")("UI")
// hof("hof")("UI")

// =========\\=========\\

// function test(){
//     return 1+2
// }
// function hello(x){
//     let data = function(){
//         return "hof"
//     }
//     return data 
// }

// console.log(hello(test))

// let data = [2,6,7,8]

// let result = data.map((item) => 10*item)

// console.log(result)


// ========custom hof=========

let data2 = [2,5,7,4]

Array.prototype.customMap = function(x){
    const result = []
    for(let i=0; i<this.length;i++){
        result.push(x(this[i]))
    }
    return result
}

let output = data2.customMap((item) => item+20)
console.log(output)












