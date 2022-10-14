/*City Names: Write a function called city_country() that takes in the name of a city and its country. The 
function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
let city='Madina';
let country='KSA';

function city_country(city,country='Pakistan') 
{
    console.log('"'+city+'", "'+country);
}
city_country(city,country);
city_country('Peshawar');
city_country('Lahore');
