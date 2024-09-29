let username=document.getElementById("username")
let password=document.getElementById("password")
let button=document.getElementById("button")
let error =document.querySelectorAll(".error")

button.addEventListener("click",function (e) {
        e.preventDefault()
        valid=true
        if (!username.value) {
            error[0].innerHTML="enter valid username"
          valid=false
            
        }
        if (!password.value) {
            error[1].innerHTML="enter valid pasword"
          valid=false

        }

        if (valid) {
            let user={
                username:username.value,
                password:password.value
            }
            user= JSON.stringify(user)
            sessionStorage.getItem("seyi",user)
            alert("login sucessful")

            setTimeout(() => {
                location.href='welcome.html'
            }, 1000);
            
        }
})