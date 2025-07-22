const FirstName = document.querySelector("#First");
const LastName = document.querySelector("#Last");
const Email = document.querySelector("#Email");
const Address = document.querySelector("#Address");
const Phone = document.querySelector("#Phone");
const msg =document.querySelector(".ERROROFF")
const Form= document.querySelector("#Checkout");

Form.addEventListener('submit',onsubmit);

function onsubmit(e){
e.preventDefault();
if(FirstName.value =='' || LastName.value =='' || Email.value =='' || Phone.value =='' || Address.value =='' ){
    msg.classList.add('ERRORON');
    msg.classList.remove('ERROROFF');
    msg.innerHTML="Please Enter all Fields to Validate your Purchase";

    setTimeout(()=>{
    msg.classList.remove('ERRORON');
    msg.classList.add('ERROROFF');
    msg.innerHTML="";}
     ,3000)
    }
else {
    msg.innerHTML=`Thank you ${FirstName.value}, for your purchase of The Art of War`;
    setTimeout(() => {msg.innerHTML=''},5000); 
}

}