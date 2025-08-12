
let count = 0

let para = document.querySelector("#para")
let increaseBtn = document.querySelector("#increaseBtn")
increaseBtn.addEventListener("click",function(){
    count++;
   para.innerHTML =count
    para.style.color = "green"
 })

 let decreaseBtn = document.querySelector("#decreaseBtn")
 decreaseBtn.addEventListener("click",()=>{
    if(count<=0){
 para.innerHTML=count
 para.style.color = "red"
 }
 else{
   count--;
    para.innerHTML = count
    para.style.color = "red"
 } 
 })

