// console.log("hello")



//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function favFood(person){
    for (let i=0; i<Object.keys(person).length; i++){
        if (Array.isArray(Object.values(person)[i])){
            if (typeof (Object.values(person)[i][0]) === 'object'){
                console.log(`Their favorite ${Object.keys(person)[i]} is ${Object.values(person)[i][0]} yyyyyy`);
                // for (let j=0; j< Object.values(person)[i][0].length; j++){
                //     console.log(`${Object.keys(person)[i][j]} llll`);
                // }
                
                }else{
            
            console.log(`Their favorite ${Object.keys(person)[i]} is ${Object.values(person)[i].join(', ')}`);
            }
        }else {
        console.log(`Their favorite ${Object.keys(person)[i]} is ${Object.values(person)[i]}`);
        }
    }
}

favFood(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(firstName,lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.printInfo = () => {
        return `You are ${this.firstName} ${this.lastName} and you are ${this.age} years old`;
    };
    
     this.grow = (years) => {
        return years + 1
    };

    };

    
let james = new Person('James','Woods',25)
console.log(james.printInfo())
james.age = james.grow(james.age)
console.log(james.printInfo())
james.age = james.grow(james.age)
console.log(james.printInfo())
james.age = james.grow(james.age)
console.log(james.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const wordLength = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length > 10){
            resolve(true);
        }else {
            resolve(false);
        };
    });
};

wordLength('hello').then((result) => {
    console.log('Big Word', result);
}).catch((error) => {
    console.log('Small Word', error);
});