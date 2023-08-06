let bangla = 50;
let english = 50;
let math = 50;

let testMark1 = bangla>=33 && english >=33 && math >=33;
let testMark2 = bangla>=50 && english >=50 && math >=50;
let testMark3 = bangla>=60 && english >=60 && math >=60;
let testResult = testMark1?testMark2?testMark3? "Resulr = B" : "Resulr = C" : "Resulr = D" : "Resulr = F" ;
console.log(testResult);  
