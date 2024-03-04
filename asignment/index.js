const requestUrl = 'https://api.github.com/users/Anushmk29'
const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl)
//  xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//  }
// console.log(xhr.readyState);
// console.log(requestUrl);
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);
    if(xhr.readyState === 4)
    {
     const data = JSON.parse(this.responseText)
    //  console.log(data)
    //  console.log(typeof(data))
    // const avatar = document.getElementById('photo')
    // avatar.innerHTML = data.avatar_Url;
    let followers_num = document.getElementById('follower')
    followers_num.textContent = data.followers;
    // console.log(data.followers)

    }

}

xhr.send()
document.querySelector('#button').addEventListener('click',xhr.onreadystatechange)