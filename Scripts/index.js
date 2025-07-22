const Username = document.querySelector("#Username");
const Password = document.querySelector("#Password");
const msg =document.querySelector(".ERROROFF")
const Form= document.querySelector("#Sign");

Form.addEventListener('submit',onsubmit);

function onsubmit(e){
e.preventDefault();
if(Username.value =='' || Password.value ==''){
    
    msg.classList.add('ERRORON');
    msg.classList.remove('ERROROFF');
    msg.innerHTML="Please Enter all Fields to Sign in or Enter as Guest";

    setTimeout(()=>{
    msg.classList.remove('ERRORON');
    msg.classList.add('ERROROFF');
    msg.innerHTML="";}
     ,3000)
    }
else {
    msg.innerHTML=`Welcome back, ${Username.value}`;
    Username.disabled=true;
    Password.disabled=true;
    setTimeout(() => {window.location.assign(url("HomePage.html"))},2000); 
}

}