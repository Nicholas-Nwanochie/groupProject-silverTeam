
function Khabib() {
document.getElementById("character-box").style.backgroundImage = "url(https://media.gettyimages.com/photos/khabib-nurmagomedov-of-russia-poses-for-a-portrait-backstage-after-picture-id943251436?s=612x612)";
var p = document.createElement("p")

p.innerHTML= 
    `Age 31 Gender Male\n
    Height	5 ft 11 inches\n
    Weight Class: Lightweight\n
    Out of Dagestan\n
    Khabib Nurmagomedov is a MMA fighter with a professional fight record of 28 wins, 0 losses and 0 draws`;
    p.setAttribute("class", "Khabibinfo")
    document.getElementById("character-box").append(p)

    if(document.getElementById("character-box").contains(p)){
        



    }
    else{
        document.getElementById("character-box2").append(p)
    }


}

function Israel() {
    document.getElementById("character-box").style.backgroundImage = "url(images/i.png)";
    var p = document.createElement("p")
    
    p.innerHTML= 
        `loremipsumdfjsdkjfjsdk`;

        p.setAttribute("class", "Israelinfo")
        let box = document.getElementById("character-box").append(p)
    
        if(document.box.contains(p)){
    
    
        }
        else{
            document.getElementById("character-box2").style.backgroundImage = "url(images/i.png)";
            document.getElementById("character-box2").append(p)
        }
    
    
    }
    