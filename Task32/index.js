/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will 
need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users=['furqan', 'fida','farman','faizan','fahad'];
let new_users=['maaz','muhammad','Farman','mahdia','fahad'];
let available=true; 

for (let newU = 0; newU < new_users.length; newU++) {   
for (let current = 0; current < current_users.length; current++) {
    if(new_users[newU].toLowerCase()==current_users[current].toLowerCase())
    {
        console.log(new_users[newU]+ ' need a new username');
        available=false;
    }
}
if (available==true)
{
    console.log(new_users[newU]+ ' is availble');
}
else
{
    available=true;
}
}