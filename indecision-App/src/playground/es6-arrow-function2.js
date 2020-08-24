const add = (a,b) =>{
//console.log(arguments);
    return a+b;
}

console.log(add(55,1));


const user = {

    name: 'Andrew',
    cities: ['philadephia', 'New York', 'Dublin'],
    printPlacesLived (){
       return this.cities.map((city) => this.name + ' has lived in ' + city);

    }
};
console.log(user.printPlacesLived());

// Challenge area


const multiplier = {
    // number - array of numbers
    // multiply by = single number 
    // multiply - return a new array where the number have been multiplied
     number:['1','2','3','4','5'],
     multplican: 3,
     multiply () {
         return this.number.map((value) => value * this.multplican);
     }
};

console.log(multiplier.multiply());