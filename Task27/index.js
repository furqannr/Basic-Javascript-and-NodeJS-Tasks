/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
let alien_color='green';//This version passes
if(alien_color=='green')
{
console.log('you have earned 5 points.');
}
else if(alien_color=='yellow') 
{
    console.log('the player just earned 10 points.');
}
else
{
    console.log('The player earned 15 points.');
}
let alien_colr='yellow';//This version goes to else if
if(alien_colr=='green')
{
console.log('you have earned 5 points.');
}
else if(alien_colr=='yellow')
{
    console.log('The player earned 10 points.');
}
else 
{
    console.log('the player just earned 10 points.');
}
let alien_clr='red';//This version fails
if(alien_clr=='green')
{
console.log('you have earned 5 points.');
}
else if(alien_clr=='yellow')
{
    console.log('The player earned 10 points.');
}
else 
{
    console.log('the player just earned 15 points.');
}