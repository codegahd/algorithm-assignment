// assignment-1

function convertFahrToCelsius(f) {
    const c = (f - 32) * (5 / 9);
    
    if (typeof f === "number") {
       return console.log(c.toFixed(4))

    }
    else if (f === "") {
        return console.log((`${JSON.stringify(f)} is not a number but a/an ${typeof f}`))
    }
    else if (typeof f === "string" && isNaN(c) !== true) {
        return console.log(c.toFixed(4))
        
    }

    else if (Array.isArray(f)) {
        isArray = "array";
        return console.log((`${JSON.stringify(f)} is not number but a/an ${isArray}`))
    }

        
    else {
        return console.log( (`${JSON.stringify(f)} is not a number but a/an ${typeof f}`))
        
        
    }
};

// asssignment--2

function checkYuGiOh(n) {
    const arr = [];
    for (var i = 1; i <= n; i++){
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            arr.push("yu-gi-oh")
        }
        else if (i % 2 === 0 && i % 3 === 0) {
            arr.push("yu-gi")
        }
        else if    ((i % 2 === 0 && i % 5 === 0) || (i % 3 === 0 && i % 5 === 0)) {
            arr.push("yu-oh")
        }
        else if (i % 2 === 0 ) {
            arr.push("yu")
        }
        else if (i % 3 === 0){
            arr.push("gi")
        }
        else if (i%5===0){
            arr.push("oh")
        }

        else {
            arr.push(i)
        }

    }
    if (typeof n==="object") {
        return console.log(`invalid parameter: ${JSON.stringify(n)}`) 
    }
    else if (isNaN(n)===true) {
        return console.log(`invalid parameter: ${n}`) 
    }
    else if (typeof n === "number") {
        return console.log(arr)
    }
    else if (n === "") {
        return console.log(`invalid parameter: ${JSON.stringify (n)}`)
    }
    else if (typeof n === "string" && isNaN(n) !== true) {
        return console.log(arr)
    }
    else  {
        return console.log (`invalid parameter: ${(n)}`)
    
    }
};

convertFahrToCelsius()
checkYuGiOh()

 


