for (let mile=2; mile<6 ; mile++)
console.log("pop piece of candy")

//Create a new loop where the runner only gets a piece of candy at every 2 miles AND if they were going move than 5.5 miles per hour.
let speed =10// we must read value from input port of devise. Here I assume value for trying.
let mile=2 // we must defined counter to count mile from start moive until stop. Here I assume start value for trying.
while (speed> 5.5){
   if (mile%2==0) // to check if runner ran for two miles or not
    console.log("pop piece of candy")
speed--; //  Here I assume decrement speed to stop loop. But in real we must read vaule of runner speed from device.
}