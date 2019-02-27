window.addEventListener('load', function(){
    console.log('Oui animation')

    let titre = document.querySelector('.site-branding');
    let sousTitre = document.querySelector('.site-description');

    sousTitre.classList.add("animSousTitre");

    console.log(sousTitre);
})