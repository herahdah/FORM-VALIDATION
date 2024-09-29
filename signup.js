let username =document.getElementById("username")
let email =document.getElementById("email")
let password =document.getElementById("password")
let cpassword = document.getElementById("cpassword")
let btnsubmit=document.getElementById("btnsubmit")
let check =document.getElementById('check')
let error =document.querySelectorAll(".error")

btnsubmit.addEventListener("click",function(e) {
    e.preventDefault()
    valid=true
    if (!username.value) {
        error[0].innerHTML="enter your username"
          valid=false

    }
    if (!email.value) {
        error[1].innerHTML="enter your email"   
    }else if (!Validemail(email.value) ) {
        error[1].innerHTML= "enter valid email"  
        valid=false

    }
    if (!password.value) {
        error[2].innerHTML="enter your password"
    }else if (password.value.length < 6) {
        error[2].innerHTML="password is too short"
        valid=false

    }
    if (password.value != cpassword.value) {
        error[3].innerHTML="password did not match"
        valid=false


        
    }
    if (!check.checked) {
        error[4].innerHTML="please agree with the terms and condition"
        valid=false

    }
    if (valid) {
        let user={
            username:username.value,
            email:email.value,
            password:password.value
        }
       user = JSON.stringify(user)
        sessionStorage.setItem("seyi",user)
        alert("registration successful")
        setTimeout(()=>{
            location.href="signin.html"
        },1000)
        
    }
})

function Validemail(email) {
    let emailpattern=/^\S+@\S+\.\S+$/;
    return emailpattern.test(email)   
}