// Funzione jQuery che permette, dopo il click sull'hamburger menu, di far vedere appunto il menu a tendina
$('i.fas.fa-bars').click(function() {

 $('.hamburger-menu').show(500);

});


// Funzione jQuery che permette invece, al click, di nascondere il menu a tendina dell'hamburger
$('i.fas.fa-times').click( function() {

 $('.hamburger-menu').hide('fast');

});
