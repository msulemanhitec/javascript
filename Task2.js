// outsideTemp = null
// const bigNumber = 3465435766544356754n
const score = 100
 const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

//Reference (Non primitive)
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
//Reference (Non primitive)
//Array,objects, Functject
const heros = ["shaktiman" , "naagraj", "doga"];
let myobj = {
   name: "hitesh",
   age:22,
}
  const myFunction = function(){
    console.log("Hello world");
  }
  //  console.log(typeof bigNumber);
  // console.log(typeof outsideTemp);
  // console.log(typeof  scorevalue);
  
  // console.log(typeof anotherId);// symbol
  // console.log(typeof bigNumber); // undefined
  // console.log(typeof outsideTemp); //object
  // console.log(typeof scorevalue); // Number
     
   //+++++++++++++++++++++++++++++++++++++++++++
   
   // Stack (Primitive) (Number , Boolean) stack ka under jub koee cheze la ga wo copy miltha tha, Heap (Non-Primitive) but koee heap ka under koee cheze raktha ha la ga reference miltha ha , Reference ( under koee cheze changing kertha ha update kertha ha wo origina vakue ka under he kertha ha )
    let myYoutubename = "hiteshchoudarydotcom"
   let anothername  = myYoutubename
   anothername = "chaiaurcode"
   console.log(myYoutubename);
   console.log(anothername);

   let userOne = {
    email: "user@google.com",
    upi : "user@ybl" 
   }
   let userTwo = userOne
   userTwo.email = "hitesh@google.com"
   //stack ma heap ko same reference miltha ma
   console.log(userOne.email);
   console.log(userTwo.email);
  

  // data type  variable assign kertha  = 1,2 