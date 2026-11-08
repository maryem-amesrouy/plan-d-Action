let livres =[
    {
        nom:"Le Petit Prince",
        prix: 100,
        auteur: "Antoine de Saint-Exupéry",
    },
    {
        nom:"La semaine perpétuelle",
        prix: 105 ,
        auteur: "Laura Vazquez",
    },
    {
        nom:"Les forces  Laura Vazquez",
        prix: 240,
        auteur: " Laura Vazquez",
    },
    {
        nom:"La rivière à l'enver",
        prix: 80 ,
        auteur: "Jean-Claude Mourlevat",
    },
  
]


let cards= document.getElementById("cart")
console.log(cards)
livres.forEach(card => {
    console.log(card)
   let livre=`<div>
            <h2>${card.nom}</h2>
            <p>${card.prix}</p>
            <p>${card.auteur}</p>
        </div> ` 

    cards.innerHTML += livre;
    
});


