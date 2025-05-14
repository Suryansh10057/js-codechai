const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);    //empty object

// function chai(){
//     console.log(this)
//     let username = "hitesh"
//     console.log(this.username);  // will work only for object
// }

// chai()



// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

/////////////declaring function thru arrow

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})  //returning object must need parenthesis


// console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach(()=>{})