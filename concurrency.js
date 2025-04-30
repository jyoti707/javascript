//concurrency
//callbacks-it is just a function that take naother function as an argukments,which is then called when rest of initial function has finished
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("hi!");
// }
// doSomething(sayHi);


// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log("you got an",grade,"amazing");
//             break;
//         case grade == "B":
//             console.log("you got an",grade,": well done!");
//             break;
//         case grade == "C":
//             console.log("you got an",grade,"alright.");
//             break;
//         case grade == "D":
//             console.log("you got an",grade,"hmmm");
//             break;
//         default:
//             console.log("An",grade,"!what?!");
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             console.log(score);
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//         case score>=60:
//             grade="D";
//             break;
//         default:
//             grade="F";
//     }
//     callback(grade);
// }
// getGrade(85,judge);

//callback become really valuable in an asynchorounus context
//the function that are inserted as argument are called callbacks
// setInterval(encourage,500);
// function encourage(){
//     console.log("you 're doing great,keep going");
// }



//promises
//we can organize the sequnce of our code in slightly easier to maintain
//this function need two parametres and these parameters are callback. we have called them resolve and reject here
//when resolve() is called, the promise is presumed to be succesful and whatever is between the arrows is returned and used as an input for the then method on the promise object. if reject() is called , the promises failed and the catch()  method on the promise obejct is excuted with the argument of the rejct() function

// let promises=new Promise(function(resolve,reject)
// {
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("too low");
//     }
// });
// promises.then(
//     function(value){
//         console.log("succes",value);
//     },
//     function(error){
//         console.log("error",error);
//     }
// );

const promise=new Promise((resolve,reject)=>{
    //resolve("succes!");
    reject("failed");
})
.then(value=>{
    console.log(value);
    return "we";
})
.then(value=>{
    console.log(value);
    return "can";
})
.then(value=>{
    console.log(value);
    return "chain";
})
.then(value=>{
    console.log(value);
    return "promises";
})
.then(value=>{
    console.log(value);
    
})
.catch(value=>{
    console.log(value);
})
