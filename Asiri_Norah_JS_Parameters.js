/* 
level 1 simple function
function greet (name){
return `Good day, ${name} !`}
console.log(greet("Norah"))
*/

// Level 2 And Level 3 function
function greet (name,time){
    if(time == undefined)
    return `Good day, ${name} !`
    if (name == "Count Dooku")
    return "I'm coming for you, Dooku!"
return `Good day, ${name} !, Time now is ${time}`}
 
//Function call
console.log(greet("Anakin")) // with 1 prameter
console.log(greet("Norah", "12:08 PM")) // with 2 prameter
console.log(greet("Count Dooku"))// with specific statment