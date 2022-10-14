/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the
 number of people you are inviting to dinner.*/
 let guestsList=['Farhan','Farman','Farzan'];
 for (let index = 0; index < guestsList.length; index++) {
     console.log("Hi Mr."+guestsList[index]+", I would like you to invite you to dinner tomorrow.");
 }
console.log("Total number of invited guests= "+guestsList.length);