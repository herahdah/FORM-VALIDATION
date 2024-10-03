let email=document.getElementById("email")
let password=document.getElementById("password")
let button=document.getElementById("button")
let error =document.querySelectorAll(".error")

button.addEventListener("click",function (e) {
        e.preventDefault()
        valid=true

        user= JSON.parse(sessionStorage.getItem('seyi'))
     
        if (!email.value) {
            error[0].innerHTML="enter valid username"
          valid=false
            
        }
        if (!password.value) {
            error[1].innerHTML="enter valid pasword"
          valid=false

        }

       if (user) {
          if (email.value == user.email) {
            if (password.value == user.password) {
              alert('login successsfully')
              setTimeout(() => {
                location.href = 'welcome.html'
              }, 1000);
            } else {
              alert('enter password')
            }
          } else {
            alert('enter email')
          }
       } else {
         alert('please register')
       }
            
})