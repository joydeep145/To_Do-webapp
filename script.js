const InputBox= document.getElementById("input-box");
const Litstore= document.getElementById("list_store");

function addTask(){
    if(InputBox.value===''){
        alert("You must enter some task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=InputBox.value;
        Litstore.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    InputBox.value=" ";
    savedTask();
}
Litstore.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedTask();
    }
},false);
function savedTask(){
   localStorage.setItem("data",Litstore.innerHTML);
}
function showTask(){
    Litstore.innerHTML=localStorage.getItem("data");
}
showTask();