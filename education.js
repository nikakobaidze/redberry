function addexperience(){
   
   const inputdiv=document.getElementById("inputall")
   const experiencediv=document.getElementById("experiencediv") 
   var btndiv=document.getElementById("btndiv")
   
   console.log(experiencediv)
 
   experiencediv.insertAdjacentHTML("beforeend",experiencediv.innerHTML)
}
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
  function myFunction() {
    var nameinput = document.getElementById("nameinput").value;
    if(nameinput.length>=2){
        document.getElementById("nameinput").classList.add("validborder");
        document.getElementById("nameinput").nextElementSibling.classList.add("dontshowinvalidicon")
        document.getElementById("nameicon").style.display='unset'
        var uni=true;
      }
      else{
        document.getElementById("nameinput").classList.remove("validborder");
        document.getElementById("nameinput").nextElementSibling.classList.remove("dontshowinvalidicon")
        document.getElementById("nameicon").style.display='none'
        uni=false;
      }
      localStorage.setItem("name",nameinput )
      document.getElementById("nameresume").innerHTML = nameinput;
    localStorage.setItem("uniname",nameinput )
    document.getElementById("uniname").innerHTML = nameinput;


    

    var aboutmeinput = document.getElementById("aboutmeinput").value;
    localStorage.setItem("aboutstudy",aboutmeinput)
    document.getElementById("aboutstudy").innerHTML = aboutmeinput;
    

    var jobend = document.getElementById("jobendinput").value;
    localStorage.setItem("finish",jobend)
    document.getElementById("finish").innerHTML = jobend;

    
if(uni){
    document.getElementById("nextpagebtn").removeAttribute("disabled")
}
   

}
 function position(){
    var e = document.getElementById("positionchoose");
var value = e.value;
var text = e.options[e.selectedIndex].text;
localStorage.setItem("studyposition",text)

document.getElementById("studyposition").innerHTML = text;

 }
 function refresh(){
    window.localStorage.clear();
    window.location.replace('main.html')
}