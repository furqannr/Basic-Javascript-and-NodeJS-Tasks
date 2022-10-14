/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let userNames=[];//['furqan', 'admin','farman','faizan','fahad'];
var user;
if(userNames.length===0)
{
    console.log('We need to find some users. ');
}
else{
for (let index = 0; index < userNames.length; index++) {
    //user=userNames[index];
   if(user=='admin')
    {
    console.log('Hi Admin! Would you like to see status report');  
    }
    else
    {
        console.log('Hello Mr. '+user+", Thank you for logging in again.")
    }   
}
}