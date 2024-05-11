var boutonsLirePlus = document.querySelectorAll('.buton_lire_plus');

boutonsLirePlus.forEach(function(bouton) {
    bouton.addEventListener('click', function() {
        var texteExtra = this.previousElementSibling.querySelector('.extra');

        if (texteExtra.style.display === 'none' || texteExtra.style.display === '') {
            texteExtra.style.display = 'block';
            this.textContent = 'Lire moins';
        } else {
            texteExtra.style.display = 'none';
            this.textContent = 'Lire plus';
        }
    });
});
