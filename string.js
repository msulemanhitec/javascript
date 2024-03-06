const nameMy = "hitesh"
 const repoCount = 50

//console.log(name + repoCount + "Value");
 console.log(`Hello my name is ${nameMy} and repo count is ${repoCount}`);  //syntex ko fallow Baklet follow ko  jithna marze variable use kertha ha
 const gameName = new String ('hitesh-hc-com')

//console.log(gameName[0]);
//console.log(gameName._proto_);

//console.log(gameName.length);
//console.log(gameName. toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(-8,4) //Ma apke value ko ignore ker du ga hor 0 sa start ker du ga
console.log(newString); //0,1,2,3 last 4 include Ni ho riee

const anotherString =gameName.slice(-8,4) 
console.log(anotherString); 

const newStringOne = " hitesh " //Trim straing and End Space ko remove ker datha ha

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-')); //Array show hoa both sara split ke value he nikal saktha ha



   
