// Marco! Polo!
//Create an application which iterates numbers from 1 to 100.
//*For multiples of 3, print "Marco!" instead of the number 
//*For multiples of 5, print "Polo!" instead of the number.
//*For numbers which are multiples of both 3 and 5 print "Marco! Polo!"
//This is a VERY common JavaScript interview question and you should know how to do this. 
//You will need to take advantage of the modulus operator to accomplish this task.

let x = 0;

do {    
    x++;
    if(x %3 ===0 && x %5 ===0){
        console.log('Marco! Polo!')
    }else if(x %3 ===0){
        console.log('Marco!')
    }else if(x %5 ===0){
        console.log('Polo!')
    }    
}while (x < 100);