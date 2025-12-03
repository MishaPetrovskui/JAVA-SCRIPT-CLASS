async function createNewDeck() {
    return fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => response.json())
}

async function getDeck() {
    let deck = localStorage.getItem("deck")
    if(deck === null)
    {
        deck = await createNewDeck()
        localStorage.setItem("deck", 
            JSON.stringify(deck))
    }
    else deck = JSON.parse(deck)
    return deck
}

async function drawCards(deck, count=1) {
    let response = 
    await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${count}`)
    response = await response.json()
    return response.cards
}

async function shuffleDeck(deck) {
    return await fetch(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`)
}

document.addEventListener("DOMContentLoaded", ()=>{
    let drawButton = document.getElementById("drawCard");
    let cardsContainer = document.querySelector(".cards");
    let currentDeck = null;
    getDeck()
    .then(deck => {
        currentDeck = deck;
        console.log(deck);
        return shuffleDeck(deck);
    })
    .then(() => {
        console.log("Колода перемішана");
    })
    .catch(error => {
        console.error("Помилка ініціалізації колоди:", error);
    });
    drawButton.addEventListener("click", async () => {
        if (!currentDeck) {
            console.error("Колода ще не готова");
            return;
        }

        drawButton.disabled = true;
        drawButton.textContent = "Витягуємо...";

        let cards = await drawCards(currentDeck, 1);
        
        if (cards && cards.length > 0) {
            let card = cards[0];
            
            let cardElement = document.createElement("div");
            cardElement.className = "card";
            cardElement.innerHTML = `
                <img src="${card.image}"">
                <p>${card.value} of ${card.suit}</p>
            `;
            
            cardsContainer.appendChild(cardElement);
            
            console.log("Витягнута карта:", card);
        } 
        else {
            alert("Карти в колоді закінчилися!");
            currentDeck = await createNewDeck();
            localStorage.setItem("deck", JSON.stringify(currentDeck));
            await shuffleDeck(currentDeck);
        }
        
        drawButton.disabled = false;
        drawButton.textContent = "Витягнути карту";
    });
})