/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make 
one happen. Change an index in one of your programs to produce an index error. Make sure you correct the
 error before closing the program.*/
 let guestsList=['Farhan','Farman','Farzan'];
 let mountains=['Mount Averest','K2','Korakoram'];
 let rivers=['Satlaj','Chinab','Kabal'];
 let list=[guestsList,mountains,rivers];//Making list of lists
//console.log(list[4][2]);//This will create error because of out of range. 
console.log(list[2][2]);// This will access third value of third item