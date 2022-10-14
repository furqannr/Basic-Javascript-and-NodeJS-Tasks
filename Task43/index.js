/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy
 of the array of magicians’ names. Because the original array will be unchanged, return the new array and 
 store it in a separate array. Call show_magicians() with each array to show that you have one array of
  the original names and one array with the Great added to each magician’s name.*/
let magician_names = ['John', 'Rezeh', 'Ankit'];
let copy_magician=magician_names.slice();

function make_great(magician_names) {
    for (let index = 0; index < magician_names.length; index++) {
        magician_names[index] = "Great " + magician_names[index];
    }
}
function show_magicians(magician_names) {
    console.log(magician_names);
}
make_great(copy_magician);
console.log("Original array same");
show_magicians(magician_names);
console.log("copy array changed");
show_magicians(copy_magician);