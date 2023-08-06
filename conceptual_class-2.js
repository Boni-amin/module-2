
/* 
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const combained = [...array1, ...array2]
console.log(...combained) 





function sum(a, b, c){
    return a+ b+c;
}
const array1 = [1, 2, 3]
console.log(sum(...array1))



// Copy and array 
const orginalArray = [1, 2, 3]
const CopyArray = [...orginalArray]
CopyArray.push(4, 5,6)

console.log(CopyArray)



//Combine Object
const array1 = {a:1, b:2}
const array2 = {c:3, d:4}
const combained= {...array1, ...array2}

console.log(combained)



//Marge Object
const array1 = {a:1, b:2}
const array2 = {b:3, d:4}
const combained= {...array1, ...array2}

console.log(combained)


const orginalArray = [1, 2, 3]
const CopyArray = [...orginalArray, 4, 5, 6]
CopyArray.push(7)
console.log(CopyArray)



const array1 = {a:1, b:2}
const array2 = {c:3, d:4}
const combained= {...array1, ...array2, e:5}


console.log(combained)




function greeting (...titels){
    const getGreeting = titels.map(titel=>titel.toUpperCase())
    const nestGetGreeting = getGreeting.join(", ")
    
    return `${nestGetGreeting}`
}
let res = greeting('jhon', 'tong', 'toj')
console.log(res);
*/





