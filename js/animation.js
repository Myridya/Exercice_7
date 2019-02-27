window.addEventListener('load', function(){
    console.log('Oui animation')

    let titre = document.querySelector('.site-title');
    let sousTitre = document.querySelector('.site-description');

    sousTitre.classList.add("animSousTitre");
    titre.classList.add("animTitre");

    console.log(sousTitre);
})