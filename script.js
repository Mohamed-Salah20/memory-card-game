var cards = document.querySelectorAll('.memory-card');


//sufflled cards on refresh
shuffleCards();
function shuffleCards() {
    cards.forEach(function(card) {
        card.style.order = Math.floor(Math.random() * cards.length) + 1;
    });
}



////////////main concept of flipping cards////////////////
/**contains 5 functions & 4 main variables & 1 Event Listner
 * 1- flipCard()
 * //the code starts with this function which is invoked from the Event Listener when a card is clicked
 * //it adds a 'flip' class to the clicked card to visually flip it.
 * //it checks which cards are being clicked & handles them appropriately
 * //if two different cards are clicked it invokes checkMatch() function
 * //the function was bulky so it got refactored to the other 4 functions
 * 2-checkForMatch()
 * // checks if the dataset values of the html data-* attribute of the two flipped cards are the same
 * 3-disableCards()
 * //removes the event listener for click events from both cards, preventing further clicks on these cards.
 * 4-unFlipCards()
 * //removes the 'flip' class from both cards
 * 5-resetCardsValues()
 * //resets all card-related variables and unlocks the board for further interactions.
 */

//add listner to cards elements
cards.forEach(function(card){
    card.addEventListener('click',flipCard);
});


var isFlippedCardFirst = false;
var firstCard;
var secondCard;

var lockBoard = false; //prevent further interactions with the cards while prevent users from clicking on other cards while the currently flipped cards are being unflipped. 

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
        incrementFlipppedCards();
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



//////////////replay button part/////////////////

var button = document.getElementsByTagName('button')[0]; //button.addEventListener is not a function error
                                                        //occured because getElementsByTagName returns a collection of elements rather than a single element. sol.: get the first element [0]
//add listner to replay button
button.addEventListener('click', buttonFun); 

//replay button functionality is to shuffle and flip all cards
function buttonFun(){
    cards.forEach(function(card){
        card.classList.add('flip');
    }); //made it for a beautiful flipping effect, not actually required for button logic

    setTimeout(function(){cards.forEach(function(card){
        card.classList.remove('flip');
    });},350);
    
    resetCardsValues();
    shuffleCards();
}

/////////////finish game part///////////////

var numFlipppedCards = 0; //counter to know when the game should stop 

function incrementFlipppedCards(){
    numFlipppedCards += 2; // Increment by 2 as two cards are flipped
    console.log('numFlipppedCards', numFlipppedCards);
    checkAllCardsAreFlipped();
}

function checkAllCardsAreFlipped() {
    if (numFlipppedCards === cards.length) {
        // All cards are flipped
        console.log('All cards are flipped!');
        resetCardsValues();
    }
}