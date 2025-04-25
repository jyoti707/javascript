// maps
//map hold key values pair where key can be data type
//you can create map by passing an array to new( map method)
// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);

// fruits.set("apples",500);
// fruits.set("oranges",800);//set() method can also be used to change existing map values

// console.log(fruits);
// fruits.get("apples");//get method get the values of a key in a map
// typeof fruits;
//object-string,not directly iterable,key are not well ordered,do not have size property
//map-any data type, directly iterable


//java script map() method
// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// // ])
//Map.get()
//fruits.set("banana",500);
//Map.size;
//fruits.delete("apples");
//fruits.clear();
//fruits.has("banana");   //has() method return true if a key exist in a map
//console.log(fruits);
//fruits.has("apples");


// let text="";
// fruits.forEach(function(value,key){
//     text+=key+'='+value;
// })
// console.log(text);

//map.entries()
// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);


//map.keys() -return
// for(const x of fruits.keys()){
//     text+=x;
// }
// console.log(text);

//map.values()
// for(const x of fruits.values()){
//     text+=x;
// }
// console.log(text);

// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total)

// const apples={name:'Apples'};
// const banana={name:'Banana'};
// const oranges={name:'Oranges'};
// const fruits=new Map();
// fruits.set(apples,500);
// fruits.set(banana,300);
// fruits.set(oranges,200);
// fruits.get("apples");//return undifined
// console.log(fruits);

//javascript Map.groupBy()
//ES204 added the Map.groupBy() method to javascript

// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"banana",quantity:500},
//     {name:"pranges",quantity:200},
//     {name:"kiwi",quantity:150}
// ];
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);




//javascript destructuring
//destructuring assignment syntax

// const person={
//     firstname:"john",
//     lastname:"doe",
//     age:50
// };
//let{firstname,lastname}=person;
//order can be change,order of properties not matter
// let{lastname,firstname,country="us"}=person;
// console.log(firstname);
// console.log(lastname);
// console.log(person);
//destructuring is not destructive,does not chnage the original obejct



//Alias

// let(lastname:name)=person;
// console.log(lastname);
// console.log(name);


//string destructuring

// let name="gurukultheschools";
// let[a1,a2,a3,a4,a5]= name;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// const fruits=["banana","oranges","apples","mangos"];
// //let[fruits1,fruits2]=fruits;

// let[fruits1,,,fruits2]=fruits;
// console.log(fruits1);
// console.log(fruits2);


//array position values 

// const fruits=["banana","oranges","apples","mangos"];
// let{[3]:fruit1,[2]:fruit2}=fruits;
// console.log(fruit1);
// console.log(fruit2);

//the rest property
// const numbers=[10,20,30,40,50,60,70];
// const[a,b, ...rest]=numbers
// console.log(a);
// console.log(b);
// console.log(rest);
// console.log(a,b,...rest);

// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);
// let text="";
// for(const[key,value]of fruits){
//     text +=key+" is "+value;
// }
// console.log(text);


//swapping javascript varibale

// let firstname="john";
// let lastname="doe";
// [firstname,lastname]=[lastname,firstname];
// console.log(firstname);
// console.log(lastname);


//java script exponentiation(**)
// let x=5;
// let z=x**2;
// console.log(z);

// let y=Math.pow(x,2);
// console.log(y);

//exponentoation assignment
// let x=5;
// x**=2;//raise the value of a varibale to the power of right operant
// console.log(x);


//javascript Array includes(), case sensitive
// const fruits=["banana","oranges","apple","mango"];
// console.log(fruits.includes("mango"));
// console.log(fruits.includes("banana",3));



//trailing comma 
//also known as dangling or terminal comma, trailing commas have been legal in array literal, object literal joined array. and with the introduction of ES2017 also known as ES8, trailing comma become allowed preety much enerywhere

// const arr=[
//     "one",
//     "two",
//     "three",
// ];
// console.log(arr);
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// console.log(arr.length);

// const aparseArray=[1,,,4,5,,];
//  console.log(aparseArray);

// const person={
//     firstname:"john",
//     lastname:"davis",
//     age:30,
// }
// console.log(person);

const person={
    firstname:"john",
    ,
    age:30,
}
console.log(person);


