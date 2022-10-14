let name="FuRqAn";
console.log("Name: " + name);
console.log("Name in upper case:" + name.toUpperCase());
console.log("Name in lower case:" + name.toLowerCase());
let nameLength= name.length;
//console.log("Name length:" + nameLength);
//Took loop to print rest of name
console.log("Name in title case:" + name[0].toUpperCase());
for (let index = 1; index < nameLength; index++) {
    console.log(name[index].toLowerCase()+"\r\r\r");  
 }
  
