let textNameBox = document.querySelector("input[name=username]");
let spanErrorName =document.getElementById("spanError");
textNameBox.onblur = function(){
    if(this.value==""){
        spanErrorName.style.visibility="visible";
        return;
        }

}