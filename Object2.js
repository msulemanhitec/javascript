 const tinderUser = new Object() //Single turn object ha 
// const tinderUser = {} // Ya Non single Object ha

// console.log(tinderUser)

// tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);
const regularUser ={
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname:  "choudhary"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname);
//Apies sa reponse ya syntex use kerna partha ha igar ya value kare but here jaga if else lgna partha ha lagna partha ha

  const obj1 = {1:"a", 2: "b"}
  const obj2 = {3:"a" , 4: "b"}
  
// const obj3 = {obj1, obj2  }
    const obj3 = Object.assign({},obj1, obj2) //Return target object   //Anti parthisis
    console.log(obj3);
