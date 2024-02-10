var cards = document.querySelectorAll('.memory-card');

shuffleCards();//

function shuffleCards() {
    cards.forEach(function(card) {
        card.style.order = Math.floor(Math.random() * cards.length) + 1;
    });
}

var isFlippedCardFirst = false;
var firstCard;
var secondCard;

var lockBoard = false;

function flipCard(){
    console.log('flipping function');
    if (lockBoard) return;
    if (this === firstCard) return;

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

        //matching logic
        checkForMatch();
    }

}

function checkForMatch(){
    //matching logic
    if(firstCard.dataset.framework === secondCard.dataset.framework) //do the cards match? *using html data-* attribute*
    {
        //prevent them from being clicked again if they match by removing the click event listner
        disableCards();
    }else{ //not matching
        unFlipCards(); //disable
    }
}

function disableCards(){
    //prevent them from being clicked again if they match by removing the click event listner
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    
    resetCardsValues();
}

function unFlipCards(){
    lockBoard = true;
    setTimeout(function (){ //to prevent removing flip class of second card too early
        //removing flip class from both cards
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetCardsValues();
    },500);
}

function resetCardsValues(){
    isFlippedCardFirst = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

//add listner to cards elements
cards.forEach(function(card){
    card.addEventListener('click',flipCard);
});
