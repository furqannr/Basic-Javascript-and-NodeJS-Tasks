/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
 from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program.*/
let guestsList=['Farhan','Farman','Farzan'];
for (let index = 0; index < guestsList.length; index++) {
    console.log("Hi Mr."+guestsList[index]+", I would like you to invite you to dinner tomorrow.");
}
console.log("\nDue to some unfortunate circumstances, Mr."+guestsList[2]+" won't be able to come.\n ");
for (let index = 0; index < guestsList.length; index++) {
    if(guestsList[index]=="Farzan")
    {
        guestsList[index]="Fida";

    }
}

for (let index = 0; index < guestsList.length; index++) {
    console.log("Hi Mr."+guestsList[index]+", I would like you to invite you to dinner tomorrow.");
}
console.log("We found a bigger table for dinner so now we can invite three more people.");
guestsList.unshift("Furqan");//Furqan added at zero index
guestsList.push("maaz");//Maaz added at last index
//Adding Ali at center
let temp="Ali";
for (let index = guestsList.length; index >=(guestsList.length/2); index--) {
    guestsList[index]=guestsList[index-1];
    guestsList[index-1]=temp;
}
console.log("New Guest list: 6 Members");
for (let index = 0; index < guestsList.length; index++) {
    console.log("Hi Mr."+guestsList[index]+", I would like you to invite you to dinner tomorrow.");
}
console.log("Sorry! I can invite only two people for dinner.");
for (let index = guestsList.length; index > 0; index--) {
    if(guestsList.length>2){
        console.log("Sorry Mr."+guestsList.pop()+", your dinner tomorrow is cancelled.");}
    else{
            console.log("Congrats Mr."+guestsList.pop()+", you are invited to dinner tomorrow.");}
}

console.log("Guests List contain: "+guestsList);