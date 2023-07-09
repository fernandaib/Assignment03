
let again;
do{
    again = window.prompt("Repeat entries (y or no)", "y" );
    if(again === "y" || again === "n"){
        break;
    }else{
        console.error('Entry must be y or no.');
    }
}while (true) 
 

