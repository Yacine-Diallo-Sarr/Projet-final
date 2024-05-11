
const liensAjouterAuPanier = document.querySelectorAll('.ajouterAuPanier');

const nombreArticlesPanier = document.getElementById('nombreArticlesPanier');

let nombreArticles = 0;

liensAjouterAuPanier.forEach(lien => {
    lien.addEventListener('click', function(event) {
        event.preventDefault(); 

        nombreArticles++;

        nombreArticlesPanier.textContent = nombreArticles;
    });
});

