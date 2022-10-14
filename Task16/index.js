/*   More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger 
dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/
let guestsList=['Farhan','Farman','Farzan'];
for (let index = 0; index < guestsList.length; index++) {
    console.log("Hi Mr."+guestsList[index]+", I would like you to invite you to dinner tomorrow.");
}
console.log("\nDue to some unfortunate circumstances, Mr."+guestsList[2]+" won't be able to come.\n ")

for (let index = 0; index < guestsList.length; index++) {
    if(guestsList[index]=="Farzan")
    {
        guestsList[index]="Fida";

    }
}

for (let index = 0; index < guestsList.length; index++) {
    console.log("Hi Mr."+guestsList[index]+", I would like you to invite you to dinner tomorrow.");
}
