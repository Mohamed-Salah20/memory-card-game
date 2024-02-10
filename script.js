var cards = document.querySelectorAll('.memory-card');



var isFlippedCardFirst = false;
var firstCard;
var secondCard;


function flipCard(){
    console.log('flipping function');
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
}

function unFlipCards(){
    setTimeout(function (){ //to prevent removing flip class of second card too early
        //removing flip class from both cards
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    },500);
}
//add listner to cards elements
cards.forEach(function(card){
    card.addEventListener('click',flipCard);
});
