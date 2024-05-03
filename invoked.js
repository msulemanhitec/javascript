//Immediately Invoked Function Expressions (IIFE)
// parenthisis lagaha dp ik block bun chatha ha
(function chai (){
    //named IIFE
    console.log('DB CONNECTED');
})();
// ()() parenthisis (function Defination) second () Exuction call

// globle ka popution sa problem hothi ha , globlee variable ,  defination popution  ka popution hitna ka lia if ka use kia  IIFE if use kia
 ( function aurcod(){
    console.log('DB CONNECTED TWO');
 })();
//  Run: First code end hona chai second code run hona chai

( (name) => { 
    //unname IIFE simple IIFE
    console.log('DB CONNECTED TWO ${name}'); //variable accept  kertha ha
}) ('hitesh') //parameter pass ker lia ha
// Two IIFE  pala function ko end ; kerna partha ha second function name  chala ga
// immediately function  Invoked ya patha ni ha rokna kha ha javascript ko end kerna partha ha end kerna ka java script ke zurth ha