//classes and objects
//object are collection of propertiesand objects

class ClassName{
    constructor(prop1,prop2){
        this.prop1=prop1;
        this.prop2=prop2;
    }
}
let obj=new ClassName("arg1","arg2");
console.log(obj.prop1);
console.log(obj.prop2);
// the this keyword refers to the object it belong to, the first property of the instance of ClassName
//classes are just some special function
class Dog{
    constructor(dogName,weight,color,breed){
        this.dogName=dogName;
        this.weight=weight;
        this.color=color;
        this.breed=breed;
    }
}
let dog=new Dog("javascript",2.4,"brown","chichuahua");
console.log(dog.dogName);
console.log(dog.weight);
console.log(dog.color);
console.log(dog.breed);


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
class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

greet(){
    console.log("hi there! I'm", this.firstname);
}
compliment(name,object){
    return "that's a wonderful"+object+","+name;
}
}
let p=new Person("anjali","singh");
p.greet();
let compliment=p.compliment("harry","hat");
console.log(compliment);