// var c = 300
let a = 300
const b=20
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    var c = 300 //can be accessed from out of this if
    
}


console.log(a);
console.log(b);
console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   //this will work

function addone(num){
    return num + 1
}


addTwo(5)   // hosting here we make functionas varaible so it will thro error as accessing it before declaration
const addTwo = function(num){
    return num + 2
}