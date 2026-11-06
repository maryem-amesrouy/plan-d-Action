let produits =[
    {
        id:1,
        nom :"ballon",
        prix: 200 ,
        categorie:"sport",

    },
        {
        id:2,
        nom :"Machine à Café",
        prix: 300 ,
        categorie:"Électroménager",

    },
    
        {
        id:3,
        nom :"pontalon",
        prix: 150 ,
        categorie: "vetement",

    },
    
        {
        id:4,
        nom :"Aspirateur Robot",
        prix: 400,
        categorie: "Électroménager",

    },
        {
        id:5,
        nom :"manteaux",
        prix: 250,
        categorie:"vetement",

    },
        {
        id:6,
        nom : "Livre de Cuisine",
        prix: 50,
        categorie: "livre",

    }
]

recupererProduits()
rechercher()
genererNom()
calculerSomme()


function recupererProduits() {
    let produitMoin = produits.filter(produits => produits.prix < 200)
    console.log(produitMoin)
}


function rechercher() {

    let produitID = produits.find(produits => produits.id == 2)
    console.log(produitID)
    
}

function genererNom() {

    let produitNom=produits.map(produits => {
        return produits.nom
    })
    console.log(produitNom)
    
}


function calculerSomme() {
    let produitPrix= produits.reduce((sum , produits)=>{
        return sum + produits.prix
    } ,0)
   
    console.log("total des produits est :",produitPrix)
    
}