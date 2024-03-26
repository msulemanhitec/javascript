// Object 
// singleturn
//object Decalare kerna two tarka 1: Litteral  2: Sikerat ke thara
// singleton (Litteral ke thra bana ga singleturn ni buntha ha)
// consteral ke thra bana ga sigle turn bantha ha
// Singleturn:Consteral ke thra bana ga Singleturn 1 object
// But dosre thra buntha ha single turn ni mupltiple instance bun jatha ha
// object literals
// object .create consteral method ka thtrough his ka under single turn buntha ha
//  const JsUser = {} //object  key ,value  important dala ga ke ha
// object .create
// object literals
const mySym = Symbol("key1")
 const JsUser = {
    name: "Hitesh",
    "full name" : "Muhammad Suleman", //symbol user kerna  square bracket ma liko
    [mySym]: "mykey1", //syntax [mysym] his ha ka hoth (interview)
    location: "jaipur",
    email: "m.sulemanhitec@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]

 }
   console.log(JsUser.email)
  console.log(JsUser["full name"])
console.log(JsUser[mySym])

 JsUser.email = "m.sulemanhitec@gmail.com"
 //object freezr kase value addkertha ha
// Object.freeze(JsUser) //changing opertically koee changing ni mili ge chat Gpt , MicroSoft
// JsUser.email = "m.sulemanhitec@gamil.com" //ya value opricallly ni yhi value ko freeze ker dia ha
// console.log(JsUser);

 JsUser.greeting = function(){
  console.log("Hello JS user");
  }
 console.log(JsUser.greeting); // Function excute Ni hua Function Reference hia ha
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${"this name"}'); //string Backelet (string Interplotion)
    // jha ma Refer ker jo name athimately
    // Same object ko Reference (this)
 }
console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
// //undefine Brownswer


// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript Functions</h2>

// <p>This example creates an object with 3 properties (firstName, lastName, fullName).</p>
// <p>The fullName property is a method:</p> 

// <p id="demo"></p>

// <script>
// const myObject = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// document.getElementById("demo").innerHTML = myObject.fullName();
// </script>

// </body>
// </html>