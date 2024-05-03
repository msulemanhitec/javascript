const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log('${this.username} , welcome to website');
        console.log(this);
    }
}
//Defult value 
// user.welcomeMessage()
// user.username = "sam"  //simple value kis context ka bara batha ker rha ha
// user.welcomeMessage()

//current context empty
console.log(this); //preexist
// Brower ka under Globle object ha window object ha

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
//chai()

// const chai = function ()  {
//     let username = "hitesh"
//     console.log(this.username);
// }
const chai = () => {
    let username = "hitesh"
    console.log(this)
}
//chai()
// const addtwo = (num1, num2) => {  (karli bracket ma rab kia prenthis likna para ga)
//     return num1 + num2 (imprenthisus return  (return keyword likna para ga)
// }
// const addtwo = (num1, num2) => { //Bsaic arrow hor  thra use kia chatha ha imprecis return(ma man latha hu) apko return keyword likna ke zurth ni ha
//     return num1 + num2
// }
// const addtwo = (num1, num2) => num1 +num2
 //const addtwo = (num1, num2) => (num1 +num2) 
//  (prenthisis ma add kia  Ni likna para ga)
const addTwo = (num1, num2) => ({username: "hitesh"})
 console.log (addTwo(3, 4)) 
// myArray.forEach({} => ()) arrow function
// my Array.forEach(function () ()) //classic function
// ya be contact syntex ha
// my Array.forEach(() => {}) Arrow function  
// value kia ksae come kerthi ha
// Nomal fuction ma function ma use hotha ha dosra ma use ni hotha ha (Wo globle object)
