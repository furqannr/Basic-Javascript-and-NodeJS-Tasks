/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain 
fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 
the if block should print a statement, such as You really like bananas!*/
let favorite_fruits=['apple','banana', 'mango','pineapple'];
var fruit='apple';
for (let index = 0; index < favorite_fruits.length; index++) {
    if(fruit==favorite_fruits[index])
    {
        console.log("you really like apples.")
    }   
}

var fruit='grapes';
for (let index = 0; index < favorite_fruits.length; index++) {
    if(fruit==favorite_fruits[index])
    {
        console.log("you really like apples.")
    }   
}

var fruit='banana';
for (let index = 0; index < favorite_fruits.length; index++) {
    if(fruit==favorite_fruits[index])
    {
        console.log("you really like banans.")
    }   
}

var fruit='mango';
for (let index = 0; index < favorite_fruits.length; index++) {
    if(fruit==favorite_fruits[index])
    {
        console.log("you really like mango.")
    }   
}

var fruit='pineapple';
    if(favorite_fruits.includes(fruit))
    {
        console.log("you really like pineapples.")
    }   
