let idTache= 1

let taches =[
    {
        id: "idTache++",
        titre : "html",
        statut: "strecture du projet" ,
    }
]





let input =document.getElementById("input")
let btnAjouter =  document.getElementById("btnAjouter")
let liste = document.getElementById("list")


ajouter()
modifier()
supprimer()



function ajouter() {

    btnAjouter.addEventListener("click", ()=>{
       document.getElementById("list").innerHTML+=`<p class="acheter">${input.value}</p>`
    })


    
}
function modifier() {
    
}
function supprimer() {
    
}

