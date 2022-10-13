/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.*/
let magician_names = ['John', 'Rezeh', 'Ankit'];

function make_great(magician_names) {
    for (let index = 0; index < magician_names.length; index++) {
        magician_names[index] = "Great " + magician_names[index];
    }
}
function show_magicians(magician_names) {
    console.log(magician_names);
}
make_great(magician_names);
show_magicians(magician_names);