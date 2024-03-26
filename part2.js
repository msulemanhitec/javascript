// const tinderUser = new Object() single turn object
const tinderUser = {} //Non single object

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy" 
 tinderUser.isLoggedIn = false 
 console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: { 
        firstname : "hitesh",
        lastname :  "choudhary"
    }
    }

}
//console.log(regularUser.fullname?.userfullname.firstname); //? Api sa reponse ya syntex use kerna hotha ha

const obj1 = {1:"a" , 2: "b"} 
const obj2 = {3: "a" ,4: "b"}
const obj4 = {5: "a" , 6: "b"}

//const obj3 = {obj1, obj2 }
const obj3 = Object.assign({} )

// const obj3 = {...obj1, ...obj2} // perenthises likna ke zuruth ni ha jithna chaia ker licha attomately object ka under ruk dia assign ka through object ko assign ker saktha ha
//console.log(obj3);

//Users sab zida hia ga Array of Object hia ga
//DataBase sa value hati ha users  database  sa zida hia array of object 
const users = [
    {
        id: 1,
        email: "h@gmail.com" //Array ka object ha
    },
    {
        id: 1,
        email: "h@gmail.com" //Array ka object ha
    },
    

    
    
     //1 object //. notation use ker saktha ha jase email id
     
]
 //1 object //. notation use ker saktha ha jase email id ha
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //loop lagtha ha impotant concept ha  
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(' isLoggedIn'))



// function name("usman");

// // return ('haa',+ "name")
// // console.log(usman)

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
</script>

</body>
</html>











