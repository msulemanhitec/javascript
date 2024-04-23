//Object (object ka under or object)
//const tinderUser = new Object() //single turn object (Empty Object)
const tinderUser = {} //Non single turn object 


tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser);
// //Array , Number , Boolean dake lia ha
// //Objecr ka object ka under deka ga 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
        firstname: "hitesh",
        lastname: "choudhary"

    }
}
}
console.log(regularUser.fullname?.userfullname.firstname);   //?(Question Marks) Protection marks But if else lagna para ga (Api sa response atha ya ? syntex istmal kerna partha ha But if else lagna parna ga igar value mila ya karo but ya karo

//pala Array ko Combine kia tha
   //Object ko Combine kara ga

const obj1 = {1: "a" , 2: "b"} //key number,Value ko string
const obj2 = {3:  "a" ,4: "b"}
const obj4 = {5:  "a" , 6: "b"}
//const obj3 = {  obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4) //Return kara ha his lia store karia ha //target{}empty object da do  target man lo , obj1, obj 2 , obj3 (Source)
const obj3 = {...obj1, ...obj2}  //important //object ko Spread jase glass pakra chore dia spread ho gia Spread operator use kera ga Sare value ko spread ker dia his ka bad object
//(assign ka through object ko assign ker saktha ha)
//jithna  bee ha spread ker lija  athomaetly object kka under dia ha
console.log(obj3);

//DataBase sa value hia ge (Array of object ho ga)

const users = [
    {   // array ka object
       id: 1,
       email: "h@gmail.com" 
    },
    {

    },
    {

    },
    { // Array ka under both sare object haloop through or value through kernai nha

    },

]

// users[1]. email //1 value object . niotation use ker saktha ha
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //Output value miltha  array apna sare key ko lia his ko array ma ruk dia ap chaia loop laga saktha ha ////DataBase special come kery ga hin chezo ka use key ga
// console.log(Object.entries(tinderUser)); //Array ko array mila  her ik value ko array ma mila dia First propery key ho ge second his ke value ho ge
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//kia apkapass his name koee property ha


  // Object part 3 //
//Array Restructing 
//  
// Rract Resturting

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
     
}

//course. courseInstructor
const {courseInstructor} = course
console.log(Instructor);



///////////////////////////object3////////////
// const course = {   //his litteral value ma hold kertha ha
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"

// }
//     Jithni Api Json format ha
//Object  Destructuring kia jatha ha
// course.courseInstructo r

// const {courseInstructor: instructor} = course
// console.log(courseInstructor);

// const navbar = (prop.company) => { //Ract ka bara ma batha  //yahi same concept de structuring rha hu
     

// }
// navbar(company = "hitesh")

// //Repeat
// const navbar = ({company}) => { //Ract ka bara ma batha  //yahi same concept de structuring rha hu
     

// }
// navbar(company = "hitesh")
//   {

//   }
// key(string)  value (string)
//  name:hitesh , //hisa Litteral value ma hold kertha ha
  // coursename : "js in hindi" ,
  // price: "free"

  //fetch ya ui data call karo ga ya data mil jha ga

  // jithna Api ha jsion format ha

  //Jsion Simply javascript Notation ha



  





 








    

  



