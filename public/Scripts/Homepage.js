const Form = document.querySelector("#ToDo");
const TaskName= document.querySelector("#taskname");
const msg =document.querySelector(".ERROROFF")

Form.addEventListener('submit',onsubmit);

async function onsubmit(e){
e.preventDefault();
if(TaskName.value==""){  
    
    msg.classList.add('ERRORON');
    msg.classList.remove('ERROROFF');
    msg.innerHTML="Please Enter a Book Name";

    setTimeout(()=>{
    msg.classList.remove('ERRORON');
    msg.classList.add('ERROROFF');
    msg.innerHTML="";}
     ,3000) 
    }
else {
const booksdata = await fetch(`http:/api/books/?filter=title&value=${TaskName.value}`)
console.log(booksdata);
const books = await booksdata.json();
console.log(books);
if (books.length == 0){ 
    msg.classList.add(`ERRORON`);
    msg.innerHTML =`Book not found!`}

else {
    msg.classList.remove(`ERRORON`);
    msg.classList.add(`ERROROFF`);
    msg.innerHTML=`Here is the result!<br> <br> Title : ${books[0].title} <br> Author: ${books[0].author} <br> Genre: ${books[0].genre}`;
}
}
}