
let idApprenant= 1
let apprenants =[
    {
        id: idApprenant++,
        nom: "ahmed",
        age: 23,
        note:15,
    },

    {
        id : idApprenant++,
        nom : "ilyasse",
        age: 20,
        note: 18,
    },
    {
        id : idApprenant++,
        nom : "maryem",
        age: 25,
        note: 12,
    },
    {
        id : idApprenant++,
        nom : "loubna",
        age: 26,
        note: 11,
    },
    {
        id : idApprenant++,
        nom : "khalid",
        age: 20,
        note: 9,
    },




]



ajouter()
modiffier()
supprimer()
chercher()


function ajouter() {

 let newApperonant= {
        id : idApprenant++,
        nom : "younesse",
        age: 19,
        note: 15,
    }
    apprenants.push(newApperonant)
   console.log(apprenants) 
    
}


function modiffier() {
    //  let idApprenant= apprenants.id;
     let aprenantsID = 2
     for (let i = 0; i < apprenants.length; i++) {
         if (aprenantsID == apprenants[i].id) {
         apprenants[i].note= 16   
     }  
     } 
     console.log(apprenants)

}



function supprimer() {
    let apprenantSuprrimer=[]
    let apprenantsSup = 3
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenantsSup !== apprenants[i].id) {
            apprenantSuprrimer.push(apprenants[i])
        } 
    }  
    apprenants=apprenantSuprrimer  

    console.log(apprenants)
}



function chercher() {
    let nom = "loubna"
    let apprenantNom=[]
    for (let i = 0; i < apprenants.length; i++) {
        if (nom === apprenants[i].nom) {
           apprenantNom.push(apprenants[i]) 
        }   
    }

    console.log(apprenantNom)
    
}