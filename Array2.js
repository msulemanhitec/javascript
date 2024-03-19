const marvel_heros = ["ther" , "ironman" , "spiderman"] 
const dc_heros = ["superman" , "flash" , "batman"]
marvel_heros.push(dc_heros) //Array ik single element ha

console.log(marvel_heros[3][1]);
//Arry kise type ka data lasaktha ha

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
//push  exictely arrayexict push kertha ha 
//concat exict kertha ha  new array(concat exict kertha  new array)
// const allHeros  = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// const all_new_heros =[...marvel_heros, ...dc_heros] //ik ik element mila ga
// console.log(all_new_heros); //ya hamra concat sperad operator
// zida thur allnew hero  use kertha ha apconcat use ker saktha ha

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

//  const all_new_heros = [...marvel_heros,  ...dc_heros]

//  console.log(all_new_heros);

// const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]
// const real_another_array = another_array.flat(Infinity) //without value spread ho giee ha
// console.log(real_another_array);//ik array mil giee ha  jis ma atomately spread  ho giee ha without kiee bakar 

   //Data Sakraping//

//    console.log(Array.isArray("Hitesh")) //arrray ni false ha
//    console.log(Array.from("Hitesh")) //Complete array ban deia ha
//    console.log(Array.from({name: "hitesh"})) //Emty Array da ga impotant interview (interested case)
 let score1 =100
 let score2 =200
 let score3 =300
 console.log(Array.of(score1,score2, score3));

 //important 
//  isArray of , from
//content,spread same hotha ha
// contat:same Array hia ga
// spread: spread nikltha ha orginal array nikal chathi ha