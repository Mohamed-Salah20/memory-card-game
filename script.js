var cards = document.querySelectorAll('.memory-card');



var isFlippedCardFirst = false;
var firstCard;
var secondCard;


function flipCard(){
    this.classList.add('flip');
    if(!isFlippedCardFirst) //In case there is no card flipped
    {//first click

        isFlippedCardFirst = true;
        firstCard = this; //now i have the div of the first card clicked

        console.log(isFlippedCardFirst,firstCard);
    }else{//second click
        
        isFlippedCardFirst = false;
        secondCard = this; //now i have the div of the second card clicked
    
        console.log(firstCard,secondCard);
    }

}

//add listner to cards elements
cards.forEach(function(card){
    card.addEventListener('click',flipCard);
});
