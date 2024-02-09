var cards = document.querySelectorAll('.memory-card');

function flipCard(){
    console.log('flipping');
    this.classList.toggle('flip');    
}

//add listner to cards elements
cards.forEach(function(card){
    card.addEventListener('click',flipCard);
});
