/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try 
more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
var car="HONDA", bike="Yamaha", mountain="K2", pen="Picasso", water="Nestle";
let rivers=['Satlaj','Chinab','Kabal'];
console.log('Is car=="HONDA": ',car=="HONDA");//equality of string
console.log('Is car=="honda": ',(car.toLowerCase())=="honda");// to lower case
console.log('Is Bike!="United": ',bike!="United");//Inequality of String
console.log('Is 1>2: ',1>2);
console.log('Is 1==1: ',1==1);
console.log('Is 1!=10: ',1!=10);
console.log('Is 1<2: ',1<2);
console.log('Is 1>=2: ',1>=2);
console.log('Is 1<=2: ',1<=2);
console.log('Is pen="Picasso" && Water="Aquafina" : ',pen=="Picasso"&& water=="Aquafina");
console.log('Is pen="Picasso" && Water="Nestle" : ',pen=="Picasso"&& water=="Nestle");
console.log('Is water="Nestle" || Water="Aquafina" : ',water="Aquafina"||water=="Nestle");
console.log("Is 'China' present in rivers? :",rivers.includes('China'));
console.log("Is 'Chinab' present in rivers? :",rivers.includes('Chinab'));
