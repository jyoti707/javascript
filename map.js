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
const fruits=new Map([
    ["apples",500],
    ["banana",300],
    ["oranges",200]
]);
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
let text="";
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

let total=0;
for(const x of fruits.values()){
    total+=x;
}
console.log(total);