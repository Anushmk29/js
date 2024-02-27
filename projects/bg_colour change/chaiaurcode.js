//generate random colour
const randomColor= function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        
      color += hex[Math.floor(Math.random()*16)];
    }
    return color
}
let intervalID;
const startChangeColor = function(){
  function change (){ document.body.style.backgroundColor = randomColor();
}
intervalID =setInterval(change,1000)
}
const stopChangeColor = function(){
   clearInterval( intervalID)
}

document.querySelector('#start').addEventListener('click',startChangeColor)
document.querySelector('#stop').addEventListener('click',stopChangeColor)

