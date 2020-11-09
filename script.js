//Conteneur dans lequel est contenu le texte
const container = document.querySelector("body");

function createEl(text) {
    //Créer une balise <p>
    let el = document.createElement("p");
    //Ajoute du texte à la balise
    el.textContent = text;
    //Ajout de la balise au conteneur principal
    container.appendChild(el);
}

//Récupére le texte
const str = container.textContent;
let listWords = [];
//Retire les . et les , dans le texte
let purgeStr = str.replace(/\.|\,/g, '');
//Découpe le texte à chaque espace et nouveau paragraphe dans un tableau
listWords = purgeStr.split(/\s/g);
//Retire le texte de base du conteneur
container.textContent = "";
//Appel de la fonction createEl pour chaque élément du tableau
listWords.map(w => createEl(w));