//classes and objects
//object are collection of propertiesand objects

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);
// the this keyword refers to the object it belong to, the first property of the instance of ClassName
//classes are just some special function
// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("javascript",2.4,"brown","chichuahua");
// console.log(dog.dogName);
// console.log(dog.weight);
// console.log(dog.color);
// console.log(dog.breed);


//classes
//there can be only one constructor in the class
//classes are essential blueprints for object creation
//it is the convention to start class name with capital letter
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person("anjali","singh");
// console.log(p.firstname);
// console.log(p.lastname);
// console.log("hi",p.firstname);


//Methods 
//functions on a class are callled method.when defining these methods we dont't use the function keyword.we start directly with the name
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }

// greet(){
//     console.log("hi there! I'm", this.firstname);
// }
// compliment(name,object){
//     return "that's a wonderful"+object+","+name;
// }
// }
// let p=new Person("anjali","singh");
// p.greet();
// let compliment=p.compliment("harry","hat");
// console.log(compliment);


// this-current calling object
//focus on important thing and leave the rest one is abstraction
//constructor
//to initialise the object attribute value


//properties
//properties also called fields,hold the data of the class
// class person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new person("jyoti","singh");
// console.log("hi",p.firstname);

//private specifier
// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//             this.#firstname=firstname;
//             this.#lastname=lastname;
//        }
//     } 
//     let p=new person("jyoti","singh");
//     console.log("hi",p.firstname);
//no value return in class -undifine
    // class Person {
    //     #firstname;
    //     #lastname;
    
    //     constructor(firstname, lastname) {
    //         if (firstname.startsWith("M")) {
    //             this.#firstname = firstname;
    //         } else {
    //             this.#firstname = "M" + firstname;
    //         }
    //         this.#lastname = lastname;
    //     }
    
    //     getData() {
    //         return Firstname: ${this.#firstname}, lastname: ${this.#lastname};
    //     }
    // }
    
    // let p = new Person("kay", "Moon");
    // console.log(p.getData());


    //getter and setters
    //getter are used to get the property
    //data hiding by direct accesible- incapsulation
    // class person{
    //         #firstname;
    //         #lastname;
    //         constructor(firstname,lastname){
    //                 this.#firstname=firstname;
    //                  this.#lastname=lastname;
    //             }
    //             get firstname(){
    //                 return this.#firstname;
    //             }
    //             set firstname(firstname){
    //                 this.#firstname=firstname;
    //             }
    //             get lastanme(){
    //                 return this.#lastname;
    //             }
    //             set lastname(lastname){
    //                 return this.#lastname;
    //             }
    //         }
    //     let p=new person("jyoti","singh");
    //     p.firstname="jyoti";
    //     console.log(p.firstname);



//inheritance
//reusability of code. it is the concept that classes can have child class that inherit the property and method from the parent class
// class vehical{
//     constructor(color,currentspeed,maxspeed){
//         this.color=color;
//         this.currentspeed=currentspeed;
//         this.maxspeed=maxspeed;
//     }
//     move(){ 
//         console.log("moving at",this.currentspeed);   
//     }
//     accelerate(amount){
//         this.currentspeed +=amount;
//     }
// }
// class Motorcycle extends vehical{
//     constructor(color,currentspeed,maxspeed,fuel){
//         super(color,currentspeed,maxspeed);
//         this.fuel=fuel;
//     }
//     doWheelie(){
//         console.log("driving on one wheel");
//     }
// }
// let motar=new Motorcycle("black",0,250,"gasoline");
// console.log(motar.color);
// motar.accelerate(50);
// motar.move();
//we cannot access any motorcycle properties or methods in our vehicle class 



//prototypes


// is the mechanism in js that makes it possible to have object.when nothing is specifird when creating a class , the obejcet inherit from object.prototype

class Person{
      constructor(firstname,lastname){
           this.firstname=firstname;
          this.lastname=lastname;
        }
    
  greet(){
        console.log("hi there! I'm", this.firstname);
     }
 }
 Person.prototype.introduce=function(){
    console.log("hi i am",this.firstname );
 };
 Person.prototype.favoritecolor="green";
 let p=new Person("jyoti","singh");
 console.log(p.favoritecolor);
 p.introduce();