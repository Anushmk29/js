const change_color = document.querySelectorAll('.button')
const change_body = document.querySelector('body')

change_color.forEach((button) => {
    // console.log(button)
    button.addEventListener('click',(event)=>{
    //    event.style.backgroundColor="pink"
    // console.log(event);
    // console.log(event.target);
    if(event.target.id === 'grey')
    {
        change_body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'beige')
    {
        change_body.style.backgroundColor = event.target.id
    } 
    if(event.target.id === 'yellow')
    {
        change_body.style.backgroundColor = event.target.id
    }
    if(event.target.id === 'magenta')
    {
        change_body.style.backgroundColor = event.target.id
    }   
    })
});