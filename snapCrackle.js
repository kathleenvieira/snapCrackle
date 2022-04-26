function snapCrackle(maxValue){
    let concatenado = []
    for(let i = 1; concatenado.length < maxValue; i++){
        if(i % 2 === 1){
           concatenado.push("Snap")
        }
        if(i % 5 === 0){
           concatenado.push("Crackle")
        }
        if(i % 2 === 1 && i % 5 === 0){
           concatenado.push("SnapCrackl")
        }
        if(i % 2 !== 1 && i % 5 !== 0){
           concatenado.push(i)  
        }
    }
    return concatenado.join(", ")
    
 }
 console.log(snapCrackle(10))