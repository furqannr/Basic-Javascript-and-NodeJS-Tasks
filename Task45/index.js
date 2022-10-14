/*Cars: Write a function that stores information about a car in a Object. The function should always 
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
 Call the function with the required information and two other name-value pairs, such as a color or an 
 optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/

function car(manufacturer,modelName,..._car_properties) {
    
 const car_property= {
    Manufacturer:manufacturer,
    ModelName:modelName,
    CarProperties:_car_properties
 };
return car_property;    
}


console.log(car("TOYOTA", "GLI 2017"));
console.log("Only manufacturer and model...\n\n");
console.log(car("TOYOTA", "GLI 2017","Black"));
console.log("Manufacturer,model, and Color\n\n");
console.log(car("TOYOTA", "GLI 2017","Black","Peshawar"));
console.log("Manufacturer,model, Color and City\n\n");
