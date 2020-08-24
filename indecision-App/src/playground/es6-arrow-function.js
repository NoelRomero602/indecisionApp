// const square = function (x){
//     return x *x ;

// } ;

// console.log(square(3));

// //  const squareArrow = (x) => {
// //     return x * x;
// //  };

// const squareArrow = (x) => x*x; 

//  console.log(squareArrow(10));

const name = 'Noel Romero';

const getFirstName = (string1) => {
    return string1.split(' ')[0];
};

console.log(getFirstName(name));

const getFirstName2 = (string2) => string2.split(' ')[0];
console.log(getFirstName2(name));