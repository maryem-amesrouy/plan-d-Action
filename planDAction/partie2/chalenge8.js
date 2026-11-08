let card = document.getElementById("carte")
let colors = document.querySelectorAll(".buttonColor")

let buttonAffi =document.getElementById("buttonAffichier")
let buttonMasq =document.getElementById("buttonMasquer")
let information = document.getElementById("info")

colors.forEach(colorSlc =>{
    colorSlc.addEventListener("click",()=>{

        switch (colorSlc.getAttribute("color")) {
            case "bleu":
                 card.classList.replace("bg-white", "bg-blue-500")
                break;
            case "vert":
                 card.classList.replace("bg-white", "bg-green-500")
                break;
            case "violet":
                 card.classList.replace("bg-white", "bg-purple-500")
                break;
        
            default:
                break;
        }
        
  

    
})
 
})

buttonAffi.addEventListener("click" , ()=>{
    information.classList.replace("hidden", "block")

})
buttonMasq.addEventListener("click" , ()=>{
    information.classList.replace("block", "hidden")

})


