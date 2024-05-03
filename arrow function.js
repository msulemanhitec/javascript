// // This keywords (Current context ka bara ma batha ha)
// //Basic object  ( user register)
// const user = {
//     username: "hitesh",
//     price: 999,
//     //curent contex bantha ha {this keywords ka satha}
//     welcomeMessage: function() {
//          console.log('${this.username} , welcome to website');

//     }


// }
// user.welcomeMessage()
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log('${this.username} , welcome to website');
    }
}
user.welcomeMessage()