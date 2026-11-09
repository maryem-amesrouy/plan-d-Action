let formulaire = document.getElementById("formulaire")
let article = document.getElementById("article")
console.log(article)
let button = document.getElementById("btnAjouter")
// let liste =[]

button.addEventListener("click",()=>{

    document.getElementById("liste").innerHTML+=`<p class="acheter">${article.value}</p>`
    
   let acheter =document.querySelectorAll(".acheter")
   acheter.forEach(articl => {
      articl.addEventListener("click", ()=>{
        articl.remove()

   }) 
   })
   

})



