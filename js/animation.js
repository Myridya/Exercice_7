window.addEventListener('load', function(){
    console.log('Oui animation')

    let titre = document.querySelector('.site-title');
    let sousTitre = document.querySelector('.site-description');
    let descSite = document.querySelector('.descriptionSite');

    sousTitre.classList.add("animSousTitre");
    titre.classList.add("animTitre");
    descSite.classList.add("animDescSite");


    console.log(sousTitre);
})