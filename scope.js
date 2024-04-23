let a = 300 //if ka bahir lika Globle scope (Globle ka under jo value lika ga scope ka under value hoyhi ha )
//if sa bihir hia ge Globle 300 hia ge
//ya hama both programming sa bachtha ha
if(true){           //his ka under jho jho ga
let a = 10 //scope  block ma if ka under  rha ga 10 use kera ga value same rha ga
const b =  20 //if ka under block scope         //if ka under  liktha ha block sa bahir ni jana chai
//console.log("INNER: ", a);
// var c =  30 //var avoid kertha ha

}

//  console.log(a);
//  console.log(b);
// console.log(c); 

//Cloure ik achi interested tecnique ik javascript ka under
// kerli bracket {} yahi scope ha javascript jiyhni kerli bracket ha  {} scope ha javascript (if else, function , loop ilug scope h a)
// Dom (Docunment Object Model) Ik hase HtML ko manipulate kia jatha java script ka through

///Scope level and mini hoisting //////

function one(){ 
    const username = "hitesh"

    function two(){
        const website = "youtube"
       console.log(username);  //access website  ////under ka function bahir ke value ko access ker patha ha 
    }
    console.log(website);
    two()
}
//one()

    if(true){
        const username = "hitesh"
        if (username === "hitesh") {
        const website  = " youtube"
        console.log(username + website);

    }
    //console.log(website);
}
//console.log(username);

//under wala bahir wali value ko access ker latha ha 
   // Nested if else child dunction jo parent variable ko access ker latha ha

 //++++++++++++++++++++++ interesting ++++++++++++++++++++
   function addone(num){ //Deceration Dia  ha
    return num + 1
   }
   addone(5) //return hoa value print ni hoee ha


addTwo(5) // deceartion dia ha iga ja ga value ko hold be kia ha
const addTwo = function(num){  // javasript ma concept hata hosting 
    return num + 2
}