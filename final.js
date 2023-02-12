window.addEventListener("load", (event) => {
   
    document.getElementById("nameresume").innerHTML = localStorage.getItem("name");

    
    document.getElementById("surnameresume").innerHTML = localStorage.getItem("surname");

    
    document.getElementById("aboutme_resume").innerHTML = localStorage.getItem("aboutme");

   
    document.getElementById("mailresume").innerHTML = localStorage.getItem("mail");

    
    document.getElementById("phoneresume").innerHTML = localStorage.getItem("number");

  
   
     document.getElementById("jobtitle").innerHTML = localStorage.getItem("position");
    
        
    document.getElementById("position").innerHTML = localStorage.getItem("company");
    
        
    document.getElementById("aboutjob").innerHTML = localStorage.getItem("aboutjob");
    
       
    document.getElementById("jobstart").innerHTML = localStorage.getItem("jobstart");
    
        
    document.getElementById("jobend").innerHTML = localStorage.getItem("jobend");


    document.getElementById("uniname").innerHTML=localStorage.getItem("uniname");


    document.getElementById("aboutstudy").innerHTML = localStorage.getItem("aboutstudy");


    document.getElementById("finish").innerHTML = localStorage.getItem("finish");



    document.getElementById("studyposition").innerHTML = localStorage.getItem("studyposition");
     

  });
  function closesucces(){
    document.getElementById("succesresume").style.display='none'
}
function refresh(){
    window.localStorage.clear();
    window.location.replace('main.html')
}