// generate random colors

const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#'

    for(let i=0;i<6;i++){
       let index= Math.floor(Math.random()*16)
       color+=hex[index]
    }
    return color
}
let intervalId;
const startChangingColor=function(){

    if(!intervalId){  
        intervalId=setInterval(changeBGColor,500)
    }
    
    function changeBGColor(){
        document.body.style.backgroundColor=randomColor()
    }
}

const stopChangingColor=function(){
    clearInterval(intervalId)
    intervalId=null;   //to avoid overwriting it again and again
}

document.querySelector('#start').addEventListener
('click',startChangingColor)

document.querySelector('#stop').addEventListener
('click',stopChangingColor)