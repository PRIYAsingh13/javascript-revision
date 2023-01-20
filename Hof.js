const hof = (name) =>{
    if(name === "priya"){
        return function(topic){
            console.log(`hii ${name}. What is ${topic}?. plz explain us.`)
        }
    }if(name === "singh"){
        return function(topic){
            console.log(`hii ${name}. What is ${topic}?. plz explain us.`)

        }
    }if(name === "Aircampus"){
        return function(topic){
            console.log(`hii ${name}. What is ${topic}?. plz explain us.`)

        }
    }else{
        return function(){
            console.log("hof function")
        }
    }
}

// const print1 = hof("priya");
// print1("UI")

hof("priya")("UI")
hof("singh")("UI")
hof("hof")("UI")