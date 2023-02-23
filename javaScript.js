function changercouleur() {
    if(document.getElementById("lum").innerHTML =="mode sombre"){
        document.getElementById("lum").innerHTML =  "mode lumineux";
    }else{document.getElementById("lum").innerHTML =  "mode sombre";}

    if(document.getElementById("luminosite").style.color == "black"){
        document.getElementById("luminosite").style.color =  "white";
    }else{document.getElementById("luminosite").style.color =  "black";}

  }

  function changerfond() {
    if(document.getElementById("fond").className == "black"){
        console.log(document.getElementById("fond").className)
        document.getElementById("fond").className =  "blanc"}
    else{ document.getElementById("fond").className =  "black"
    console.log("document.getElementById(style.backgroundColor")
    console.log(document.getElementById("fond").className)}
  }

  function changertext() {
    if(document.getElementById("text").innerHTML =="texte en gras"){
        document.getElementById("text").innerHTML =  "enlever texte en gras";
    }else{document.getElementById("text").innerHTML =  "texte en gras";}

    if(document.getElementById("text").innerHTML =="enlever texte en gras"){
        document.getElementById("texte").style.font =  " bold 25px Georgia,serif";
    }else{document.getElementById("texte").style.font =  "15px Georgia,serif";}
  }