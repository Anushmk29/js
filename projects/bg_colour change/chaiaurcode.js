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
  if(!intervalID){
    intervalID = setInterval(change,1000);
  }
  function change (){ document.body.style.backgroundColor = randomColor();
}
};
const stopChangeColor = function(){
   clearInterval( intervalID);//this overrides the value repeadly
   intervalID = null;//this derefrences the id and gives 
  }

document.querySelector('#start').addEventListener('click',startChangeColor)
document.querySelector('#stop').addEventListener('click',stopChangeColor)

