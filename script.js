
// on recupere les deux id

let text =document.getElementById("text");
let form = document.getElementById("form");
// on fait ecouter le submit avec la fonction

form.addEventListener("submit",handelData);

// on cree la function

function handelData(e){

// si on cherche vide ilk afiche pas ereur
e.preventDefault();
 // on cree une let on stock le valeur de input
let movieNAME = text.value;

// on recupere le lien de API et on rajoute le let quand va recupere et je rajoute le s qui est recupere le nom de film
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d53466c&s=" +movieNAME+'"')
// on transforme on format json 
.then(res => res.json())
.then(data => {

    // on a besoin que du Search pas des autre information
    hadelResponse(data.Search);

})
.then(err => {}); 
}
 // on cree une function qui va nous afficher le contenu
function hadelResponse(data){
// on recupere  le champs ou on va afficher le resultat
let datacontainer= document.getElementById("datacontainer");
// on crer une let ou va afficher tout les donner 
let output="";
for (var i = 0 ; i< data.length;i++){

    output+= `
    <div class=" col-12 col-md-6 col-lg-3  group-container">
    <div class="image-container">
    <img src=${data[i].Poster}>
   
    <p class ="sami">${data[i].Title}</br><span>${data[i].Year}</span></p>
    </div>
    </div>
   
    `;
}
//afichage de recherche
 datacontainer.innerHTML= output;
    
}