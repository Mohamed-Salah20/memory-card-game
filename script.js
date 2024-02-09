var cards = document.querySelectorAll('.memory-card');

function flip(){
    console.log('flipping');
}

//add listner to cards elements
cards.forEach(function(card){
    card.addEventListener('click',flip);
});
