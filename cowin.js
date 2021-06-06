const { bgRedBright } = require("chalk");

var a ; 
showhide();
function showhide(){
    if (a==1){
        document.getElementById('hidden').style.display="inline";
        return a=0;
    }else{
        document.getElementById("hidden").style.display="none";
        return a=1;
    }
}
register();
function register(){
    alert("YOUR DETAILS HAVE SUCCESFULLY REGISTERED")
    let button = document.querySelector(".register-btn");
    let inputs = document.querySelectorAll(".input");

    button.addEventListener("click",()=>{
            inputs.forEach(input=>input.value="");
    });

    
}