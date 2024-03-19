 let myDate = new Date() //Date ik object he ik javascript ka under coffe time poncha chata his lia specfic ker detha hu
 //Date mdn Google:javascript  date single moment in time janaury 1970,UTC (the epoch). Date milsecond ma calculate hothi ha
// console.log(myDate); //date compare ni ker saktha use be ni ker saktha
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate) // his Date ka type dakna chatha hu Date(Object) javascript ka under

//Month jo ha wo 0 sa start htha ha java script ka under 
// let myCreateDate = new Date(2023, 0 , 23,5,3)  //new date spefic hothi ha (new Date create hothi ha)
// let myCreateDate = new Date(2023 ,0 ,23 ,5,3)
// console.log(myCreateDate.toDateString()); //Method bulid in
// console.log(myCreateDate. toLocaleString());
// let myCreatedate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString());

// console.log(new Date()) //universal date already chaltha ratha ha
// console.log(new Date().toLocaleString()) // new date time new new cheze find ho ge 

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString()); //Local in (my Libary )
 let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

   //TimeStamp// Exact Time value dekna ha ,special Quiz design kera ha poool design kera ga jis na fasted dia ha his ko apna winner bana ha in cases in stituation ma TimeStamp ko use kera ga
let myTimeStamp = Date.now()
//    console.log(myTimeStamp); //output 1710281155553 Long Digit mili second 1 january 1917 mili second value ha ya mili second  koee value niklna  thora difficult ho jatha kiee bar ha giee 
   //hotel book or room pool date ko kieee bar compare kerna partha ha
//    let myTimeStamp = Date.now()
//    console.log(myTimeStamp);
//    console.log(myCreatedDate.getTime()); //Two value ha mili second ma
//     console.log(Date.now()); //Mili Second imp interview  exact abi Date da ga
    // console.log(Date.now()/1000); // Decimal value ha jathi ha
    // console.log(Math.floor(Date.now()/1000)); second value chothi value compare ho jatha ha
    // jis value and Method
    // let newDate = new Date()
    // console.log(newDate);
    // console.log(newDate.getMonth()); //Month 2 and 0 sa start
  
     let newDate = new Date()
    console.log(newDate);
     console.log(newDate.getMonth() +1); //End user confuse jo value Exacty value woee mila
     console.log(newDate.getDay()); //Monday,Thusday Wendnesday (Third apko mil jatha ha)
      //Date print ker de
   //   ${newDate.getDate()} //and the time
   newDate.toLacaleString('deficult'){
      weekday: "Long"
      timeZone: "newDate"
   }
