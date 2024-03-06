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
 const newstring = gameName.substring(0,4) //  //last value incude ni horiee darmian wali value include ni ho riee ha under (0,4) 
 console.log(newstring);

 const newString = gameName.substring(-8,4) //Ma apke value ko ignore ker du ga hor 0 sa start ker du ga
console.log(newString); //0,1,2,3 last 4 include Ni ho riee

const anotherString =gameName.slice(-8,4) //slice ma negative value use ker saktha ha
console.log(anotherString); 

//Trim start koee  cheze ha Trim End koee cheze ha white space character ma he come kertha ha white character plus line terminators (new line Slach / in character ap use kertha ha) new method ka patha chat atrim start ha be trim End be ha trim ka value out (First Starting Space be ha Or End space Be ha Second Wala be sirf hitesh ha) Trim starting space and End Space ko remove ker detha  ha
const newStringOne = " hitesh " //Trim straing and End Space ko remove ker datha ha

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-')) //value drive kersaktha hu (Replace ker saktha ha)

console.log(url.includes('hitesh')) //ponch be saktha ha
console.log(url.includes('sundar'))

console.log(gameName.split('-')); //Array show hoa both sara split ke value he nikal saktha ha

//string zada powerful value hothi kise be value ma

   
