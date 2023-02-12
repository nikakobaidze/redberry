function myFunction() {
    var nameinput = document.getElementById("nameinput").value;
    if(nameinput.length>=2){
        document.getElementById("nameinput").classList.add("validborder");
        document.getElementById("nameinput").nextElementSibling.classList.add("dontshowinvalidicon")
        document.getElementById("positionicon").style.display='unset'
        var position=true;
      }
      else{
        document.getElementById("nameinput").classList.remove("validborder");
        document.getElementById("nameinput").nextElementSibling.classList.remove("dontshowinvalidicon")
        document.getElementById("positionicon").style.display='none'
        position=false;
      }
      localStorage.setItem("name",nameinput )
      document.getElementById("nameresume").innerHTML = nameinput;
    localStorage.setItem("position",nameinput )    
    document.getElementById("jobtitle").innerHTML = nameinput;





    var surnameinput = document.getElementById("companyinput").value;
    if(surnameinput.length>=2){
        document.getElementById("companyinput").classList.add("validborder");
        document.getElementById("companyinput").nextElementSibling.classList.add("dontshowinvalidicon")
        document.getElementById("companyicon").style.display='unset'
        var company=true;
      }
      else{
        document.getElementById("companyinput").classList.remove("validborder");
        document.getElementById("companyinput").nextElementSibling.classList.remove("dontshowinvalidicon")
        document.getElementById("companyicon").style.display='none'
        company=false;
        
      }
      
    localStorage.setItem("company",surnameinput)
    document.getElementById("position").innerHTML = surnameinput;

    var aboutmeinput = document.getElementById("aboutmeinput").value;
    localStorage.setItem("aboutjob",aboutmeinput)
    document.getElementById("aboutjob").innerHTML = aboutmeinput;

    var jobstart = document.getElementById("jobstartinput").value;
    // if(jobstartinput.length>=2){
    //     document.getElementById("jobstartinput").classList.add("validborder");
    //     document.getElementById("jobstartinput").nextElementSibling.classList.add("dontshowinvalidicon")
    //     document.getElementById("jobstarticon").style.display='unset'
    //   }
    //   else{
    //     document.getElementById("jobstartinput").classList.remove("validborder");
    //     document.getElementById("jobstartinput").nextElementSibling.classList.remove("dontshowinvalidicon")
    //     document.getElementById("jobstarticon").style.display='none'
        
    //   }
      
    localStorage.setItem("jobstart",jobstart)
    document.getElementById("jobstart").innerHTML = jobstart;

    var jobend = document.getElementById("jobendinput").value;
    // if(jobendinput.length>=2){
    //     document.getElementById("jobendinput").classList.add("validborder");
    //     document.getElementById("jobendinput").nextElementSibling.classList.add("dontshowinvalidicon")
    //     document.getElementById("jobendicon").style.display='unset'
    //   }
    //   else{
    //     document.getElementById("jobendinput").classList.remove("validborder");
    //     document.getElementById("jobendinput").nextElementSibling.classList.remove("dontshowinvalidicon")
    //     document.getElementById("jobendicon").style.display='none'
        
    //   }
      
    localStorage.setItem("jobend",jobend)
    document.getElementById("jobend").innerHTML = jobend;

    

    var imageinput = document.getElementById("imageinput");
    document.getElementById("imageresume").src = imageinput;

    if(company==true && position==true)[
        document.getElementById("nextpagebtn").removeAttribute("disabled")
    ]

}

function addexperience(){
    console.log("hello")
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
    
     

  });
  function refresh(){
    window.localStorage.clear();
    window.location.replace('main.html')
}