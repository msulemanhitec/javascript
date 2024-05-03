const userEmail = []
if(userEmail) {
 console.log("GOt user email");
}
else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt on, "", null, undefined, NaN //0 cavited point hotha ha
//"0" truthy value 'false' , " " truthy  value
// [] empty arry truthy value {}, emty object truthy value , infect  function(){} truthy  value

if (userEmail.length === 0){
    console.log("Array is empty");
}
const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Null Coalescing Operator
// /Nullish Coalescing Operator (??)
// truthy  Coalescing Operator Dono ilug cheze ha


// Nullish Coalescing Operator (??) :null  undefined
//(Null value hia ha Safty check kero)
let val1;
val1 = 5 ?? 10
val1 = null ?? 10 //Complish Function value hiee tek ha next value assign ker do
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //flage , True
console.log(val1)  
//=== value check kertha ha type ko check kertha ha
//Terniary Operator
const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")
// condition flow ka bara ma jana
//  All time  sara code excute ni ker chatha , useloggin kerna ha
//undefine value ha rhee ha value assign ker do  //reponse hia na undefine ha jia
//null  null assign ker do  
 //1 Questio marks 2 Question Marks

 Logical control , control flow  Complete
  