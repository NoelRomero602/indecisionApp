
class Person {
   
        constructor(name = 'Anonymous', age =0 ){
            this.name = name ;
            this.age = age;
        }
        getGretting(){
           return `Hi, I am ${this.name}`;
        }

        getDescription(){
            return `${this.name} is ${this.age} year(s) old!`;
        }
}

class Student extends Person {
constructor(name,age, major){
    super(name,age);  
    this.major = major;
}
   hasMajor(){
       return !!this.major;
   }
   getDescription(){
       let description = super.getDescription();
       if(this.hasMajor()){
           description += `Their major is ${this.major}`;
       }
       return description;
   }
}
class Traveler extends Person {
    constructor(name,age, location ="no where"){
        super(name,age);  
        this.location = location;
    }
    getGretting(){
        let gretting = super.getGretting();
        if(this.hasLocation())
        {
            gretting +=` I'm visiting from ${this.location}`;
        }
        return gretting;
    }
    hasLocation(){
        return !!this.location;
    }
}


const me = new Traveler('Noel Romero',21,'Dallas');

console.log(me.getGretting());

const other =new Traveler();
console.log(other.getGretting());