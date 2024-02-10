# Memory Card Game

## Description

This project implements a simple memory card game where cards can be flipped and matched. The game includes functionality to shuffle the cards on refresh and allows users to interact by clicking on the cards to flip them. The code consists of CSS styles for card layout and button design, along with JavaScript functions to handle card flipping, matching, and game logic.

## Features

1. **Shuffling Cards:** Implemented a function to shuffle the cards randomly every time the game starts or is reset.
  
2. **Grid Layout:** Createted a grid layout to display the face-down cards. Used CSS to style the cards attractively.

3. **Card Flip Animation:** Added a smooth animation effect when the player clicks on a card, revealing its face. Included a timeout to allow the player to memorize the card before flipping it back if there is no match.

4. **Matching Logic:** Implemented logic to check if the two flipped cards match. If they do, keep them face up; otherwise, flip them back face down.

5. **Game Completion:** Detected when the player has successfully matched all the pairs, and display a modal congratulatory message.

6. **Replay Button:** Resets the game to allow for replay, through flipping all cards and shuffiling them.

## Deployment

I deployed the game using Github Actions and you can try it on the provided url: [Memory Game](https://mohamed-salah20.github.io/memory-card-game/)

----------------------------------------------------------------------------
Below is an overview of the main functions in the code:
#### Flipping Cards
- The game involves flipping pairs of cards to find matching pairs.
- The main functions involved in flipping cards are:
  1. `flipCard()`: Handles the logic of flipping cards and checking for matches.
  2. `checkForMatch()`: Compares the data values of two flipped cards to check for a match.
  3. `disableCards()`: Disables further clicks on matched cards.
  4. `unFlipCards()`: Flips back non-matching cards.
  5. `resetCardsValues()`: Resets card-related variables.

#### Replay Button
- A replay button is provided to shuffle and reset all cards for a new game.
  1. `resetBoard()`

#### Game Completion
- The game ends when all cards are successfully matched.
- A congratulations modal is displayed upon completing the game.
  1. `incrementFlipppedCards()`
  2. `checkAllCardsAreFlipped()`
  3. `showCongratulationsModal()`
  


  