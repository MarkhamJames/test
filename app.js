const button = document.querySelector("button")

button.addEventListener("click", go)

const go = () => {
  console.log('hello')
  const readlineSync = require('readline-sync');
}

    function getInput(prompt) {
      return readlineSync.question(`${prompt}: `);
      document.getElementById('readline-sync').innerHTML = readlineSync;
    }

    function greet() {
      const name = getInput("Welcome! It is a pleasure having you join us. If I may, what is your name?");
      console.log(name);
      return name;
    }

    function compare(card1, card2) {
      return card1.value - card2.value;
    }

    function guess(card1, card2) {
      console.log(card1.rank + card1.suit);
      const input = getInput("So...what do you think? Will the next card higher (type: h) or lower (type: l)?");
      if (input === 'h') {
        return (compare(card1, card2) < 0);
      } else if (input === 'l') {
        return (compare(card1, card2) > 0);
      } else {
        console.log(`Tsk tsk tsk, you did not type either (h) or (l). No points this round for failing to follow directions. Please try again.`)
        return false;
      }
    }
    //play game below

    const playGame = async () => {
      const deck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
      console.log(deck)
      const playerName = greet();
      const deckId = shuffleNewDeck.data.deck_id
      let score = 0;
      let currentCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      console.log(currentCard)
      const showPlayersCards = (cards) => {

        cards.forEach((card) => {
          let playerCardChosen = document.createElement('div');
          playerCardChosen.innerHTML = `<img src=${card.image} />`
          playersCards.append(playerCardChosen)
        })
      }
      showPlayersCards(currentCard.data.cards)
      playersCards.style.backgroundImage = `url(${cards[i].image})`

      while (score < 5 && score < deck.length) {
        let nextCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        console.log(nextCard)
        const showOpponentsCards = (cards) => {
          let opponentsCards = document.querySelector('.opponents-cards')
          cards.forEach((card) => {
            let opponentsCardChosen = document.createElement('div');
            opponentsCardChosen.innerHTML = `<img src=${card.image} />`
            opponentsCards.append(opponentsCardChosen)
          })
        }
        showOpponentsCards(nextCard.data.cards)
        opponentsCards.style.backgroundImage = `url(${cards[i].image})`

        if (guess(currentCard, nextCard)) {
          score += 1;
          console.log(`Congratulations! You scored a point. Your total score is now ${score}!`);
        } else {
          console.log(`Sorry, no points for you. Your total score is still ${score}`)
        };
        currentCard = nextCard;
      }
      deck.length !== 0 ? console.log("Nice job! You win!") : console.log("Oh no! You're out of cards and out of luck. You have lost :(");
    }







  }    