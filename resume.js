var vr="gtre"
console.log(vr[1-2])

document.getElementById("surnameinput").previousElementSibling
document.getElementById("nameinput").nextElementSibling.nextElementSibling

function myFunction() {
    var nameinput = document.getElementById("nameinput").value
    
    if(nameinput.length>=2){
      document.getElementById("nameinput").classList.add("validborder");
      document.getElementById("nameinput").nextElementSibling.classList.add("dontshowinvalidicon")
      document.getElementById("nameicon").style.display='unset'
      var namevalid=true;
    }
    else{
      document.getElementById("nameinput").classList.remove("validborder");
      document.getElementById("nameinput").nextElementSibling.classList.remove("dontshowinvalidicon")
      document.getElementById("nameicon").style.display='none'
      namevalid=false;
      
    }
    localStorage.setItem("name",nameinput )
    document.getElementById("nameresume").innerHTML = nameinput;
    
  


    var surnameinput = document.getElementById("surnameinput").value;
    if(surnameinput.length>=2){
      document.getElementById("surnameinput").classList.add("validborder");
      document.getElementById("surnameinput").nextElementSibling.classList.add("dontshowinvalidicon")
      document.getElementById("surnameicon").style.display='unset'
      var surnamevalid=true;
    }
    else{
      document.getElementById("surnameinput").classList.remove("validborder");
      document.getElementById("surnameinput").nextElementSibling.classList.remove("dontshowinvalidicon")
      document.getElementById("surnameicon").style.display='none'
      surnamevalid=false
    }
    localStorage.setItem("surname",surnameinput)
    document.getElementById("surnameresume").innerHTML = surnameinput;



    
    var aboutmeinput = document.getElementById("aboutmeinput").value;
    localStorage.setItem("aboutme",aboutmeinput)
    document.getElementById("aboutme_resume").innerHTML = aboutmeinput;



    // var mailcorrect=['@','r','e','d','b','e','r','r','y','.','g','e']
    var mailinput = document.getElementById("mailinput").value;
    // console.log(Array.from(mailinput.slice(-12)))
    // for (let i = 0; i < mailcorrect.length; i++){
    //   if(mailcorrect[i]===mailinput[i]){
      
    //     document.getElementById("mailinput").classList.add("validborder");
    //   document.getElementById("mailinput").nextElementSibling.classList.add("dontshowinvalidicon")
    //   document.getElementById("mailicon").style.display='unset'
    //   }
    // else{
      
    //   document.getElementById("mailinput").classList.remove("validborder");
    //   document.getElementById("mailinput").nextElementSibling.classList.remove("dontshowinvalidicon")
    //   document.getElementById("mailicon").style.display='none'
      
    //   }
    // }
    
    
    localStorage.setItem("mail",mailinput)
    document.getElementById("mailresume").innerHTML = mailinput;

    var numberinput = document.getElementById("numberinput").value;
    if(numberinput.length==13){
      document.getElementById("numberinput").classList.add("validborder");
      document.getElementById("numberinput").nextElementSibling.classList.add("dontshowinvalidicon")
      document.getElementById("numbericon").style.display='unset'
      var numbervalid=true
    }
    else{
      document.getElementById("numberinput").classList.remove("validborder");
      document.getElementById("numberinput").nextElementSibling.classList.remove("dontshowinvalidicon")
      document.getElementById("numbericon").style.display='none'
      numbervalid=false
    }
    localStorage.setItem("name",nameinput )
    document.getElementById("nameresume").innerHTML = nameinput;
    localStorage.setItem("number",numberinput)
    document.getElementById("phoneresume").innerHTML = numberinput;

    var imageinput = document.getElementById("imageinput").value;
    document.getElementById("imageresume").src = imageinput;
    console.log(imageinput)
console.log("nameinput")
if(namevalid==true && surnamevalid==true && numbervalid==true){
  // function extpage(){
  //   window.location.replace('experience.html')
  // }
  document.getElementById("nextpagebtn").removeAttribute('disabled')
}
}

window.addEventListener("load", (event) => {
   
    document.getElementById("nameresume").innerHTML = localStorage.getItem("name");

    
    document.getElementById("surnameresume").innerHTML = localStorage.getItem("surname");

    
    document.getElementById("aboutme_resume").innerHTML = localStorage.getItem("aboutme");

   
    document.getElementById("mailresume").innerHTML = localStorage.getItem("mail");

    
    document.getElementById("phoneresume").innerHTML = localStorage.getItem("number");

  });
  function refresh(){
    window.localStorage.clear();
    window.location.replace('main.html')
}


