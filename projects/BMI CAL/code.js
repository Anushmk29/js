const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
   e.preventDefault()

  const height= parseInt(document.querySelector('#height').value)
//   console.log(height);
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')
  const  more_info_result = document.querySelector('#more_info_result')
      if(height === '' || height<0|| isNaN(height))
      {
        results.innerHTML = `please give valid height ${height}`;
      }
      else if(weight === '' || weight<0|| isNaN(weight))
      {
        results.innerHTML = `please give valid weight ${weight}`;
      }
      else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        //display in result
        results.innerHTML =`<span>${BMI}</span>`
        
        if(BMI<=18.6)
      {
        more_info_result.innerHTML = 'you are Under Weight '
      }
      else if(BMI>=24.9)
      {
        more_info_result.innerHTML = 'you are overweight Weight '
      }
      else
      {
        more_info_result.innerHTML = 'you have normal Weight '
      }
      }
     
      

      
})