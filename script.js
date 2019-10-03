// start button initialized as object and 
// drawing Player and Opponents hand
// as well as a card from the pile face up 

const button = document.querySelector("button")
const getData = async () => {
  const shuffleNewDeck = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  console.log(shuffleNewDeck)
  const deckId = shuffleNewDeck.data.deck_id
  const playerDraws = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
  console.log(playerDraws)
  const opponentDraws = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
  console.log(opponentDraws)
  const topCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  console.log(topCard)
  
  const showPlayersCards = (cards) => {
    let playersCards = document.querySelector('.players-cards')
    cards.forEach((card) => {
      let playerCardChosen = document.createElement('div');
      playerCardChosen.innerHTML = `<img src=${card.image} />`
      playersCards.append(playerCardChosen)
    })
  }
  const showOpponentsCards = (cards) => {
    let opponentsCards = document.querySelector('.opponents-cards')
    cards.forEach((card) => {
      let opponentsCardChosen = document.createElement('div');
      opponentsCardChosen.innerHTML = `<img src=${card.image} />`
      opponentsCards.append(opponentsCardChosen)
    })
  }
  const showTopCard = (cards) => {
    let topCard = document.querySelector('.top-card')
    cards.forEach((card) => {
      let topCardAppended = document.createElement('div');
      topCardAppended.innerHTML = `<img src=${card.image} />`
      topCard.append(topCardAppended)
    
    })
  }
  showPlayersCards(playerDraws.data.cards)
  showOpponentsCards(opponentDraws.data.cards)
  showTopCard(topCard.data.cards)

}
button.addEventListener("click", getData)

// player chooses a card to throw on the discard pile 

const ridCard = (array) => {
  for (let i = 0; i < array.length; i += 1)
    
    
  }
}




 

}

 {
   playerDraws[i].addeventlistener("click", pickCard)
  }

const 

const drawNewCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)










