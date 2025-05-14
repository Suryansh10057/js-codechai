//IIFE : immediately invoked function expressions 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // to end the line for next function execution

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


(()=>{
   console.log(`DB connected two`)
} )()
//(function)(execution)   //for immediate execution and to avoid pollution due to global scope