let augmentation = document.getElementById("augmenter")
let diminuer = document.getElementById("diminuer")
let réinitialisation = document.getElementById("éinitialiser")
let compteur =document.getElementById("compteur").textContent

compteur= 0


augmentation.addEventListener ("click", (e)=> {
    compteur =compteur + 1
    
})

diminuer.addEventListener("click" , (e)=>{
    compteur = compteur - 1
})

réinitialisation.addEventListener("click", (e)=>{
    compteur = 0
})


