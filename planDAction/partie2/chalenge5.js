let augmentation = document.getElementById("augmenter")
let diminuer = document.getElementById("diminuer")
let réinitialisation = document.getElementById("réinitialiser")
let compteur = 0
document.getElementById("compteur").innerText = `${compteur}`
 


augmentation.addEventListener ("click", ()=> {
    compteur =compteur + 1
    
document.getElementById("compteur").innerText = `${compteur}`

    
})

diminuer.addEventListener("click" , ()=>{
    compteur = compteur - 1
    if (compteur < 0) {
        return compteur = 0
        
    }
        
document.getElementById("compteur").innerText = `${compteur}`


})

réinitialisation.addEventListener("click", ()=>{
    compteur = 0
       
document.getElementById("compteur").innerText = `${compteur}`


})




