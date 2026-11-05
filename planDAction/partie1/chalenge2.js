let note = [10 , 9 , 11 , 8 , 12 , 14 , 17 , 18]

notMoyenne()
meilleureNote()
notesSuperieures()
moyenneClasse()

function notMoyenne() {

 let moyenne = 0
 let sum = 0

 for (let i = 0; i < note.length; i++) {
    sum += note[i]
    
 }

 moyenne =sum / note.length
 console.log(`la note moyenne est : ${moyenne}`); 
 return moyenne
 

   
}



function meilleureNote() {

    let meillNote= 0
    for (let i = 0; i < note.length; i++) {
        if (meillNote < note[i]) {
            meillNote = note[i];
        }

       
        
    } console.log(`le meilleure note est : ${meillNote}`)
    
}


function notesSuperieures() {

    let superNote =0

    for (let i = 0; i < note.length; i++) {
        if (note[i] >= 10) {
            superNote +=1
            
        }
        
    }console.log(`les notes superieures à 10 sont : ${superNote}`)
    
}


function moyenneClasse() {
    const classMoyen = notMoyenne()

    if (classMoyen >= 10) {
        console.log("yes")
    }else{
        console.log("no")
    }
    
}



