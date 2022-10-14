/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to 
print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each 
pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist 
of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
let favoritePizza=["Tikka", 'Fajita','Supreme'];
for (let index = 0; index < favoritePizza.length; index++) {   
    console.log('I like '+favoritePizza[index]);
}
console.log('Pizza topped with chicken, bell peppers, onions and salsa. Another family favorite that has been adapted');
console.log('from a Pillsbury Bake-off recipe. Prep time does not include time to make dough');
console.log('\bI really love this pizza.');

