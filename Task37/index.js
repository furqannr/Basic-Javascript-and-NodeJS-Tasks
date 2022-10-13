/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of 
any size with a different message.*/
let size=prompt('Enter size');
let text=prompt('text to print');
make_shirt(size,text);
function make_shirt(size='large', text) 
{
        if(size=='large'||size=='medium'||size=='')
        console.log("I love javascript");    
        else
        console.log("Hiii size is not large/medium")
    }

