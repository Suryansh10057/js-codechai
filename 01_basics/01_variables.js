const accountID=1443
let accountemail="surya@gmsil.com"
var accountpassword="12345"
accountcity="Jaipur"

<<<<<<< HEAD
accountID=1234 //not allowed as const cannot change

console.log(accountID)
=======
// accountID=1234 //not allowed as const cannot change

console.log(accountID)
console.table([accountID,accountemail,accountpassword,accountcity])

accountemail="abc@gmail.com"
accountpassword="1211"
accountcity="bengaluru"
let accountstate

console.table([accountID,accountemail,accountpassword,accountcity,accountstate])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/
>>>>>>> 4910cda4c665fd3a2d6421bcd623260a74209ded