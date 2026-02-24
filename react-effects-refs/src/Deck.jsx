import Card from "./Card";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function Deck() {
  const API_URL =
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
  const API_DRAW_URL = "https://deckofcardsapi.com/api/deck";

  const [card, setCard] = useState(null);
  const [deck, setDeck] = useState(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const deckId = useRef(null);

  useEffect(() => {
    const fetchDeck = async () => {
      const response = await axios.get(API_URL);
      setDeck(response.data);
      deckId.current = response.data.deck_id;
    };
    fetchDeck();
  }, []);

  const getCard = async function () {
    if (deck.remaining === 0) {
      alert("No cards remaining!");
      return;
    }

    const response = await axios.get(
      `${API_DRAW_URL}/${deckId.current}/draw/?count=1`,
    );
    setCard(response.data.cards[0]);
    setDeck((prevDeck) => ({
      ...prevDeck,
      remaining: prevDeck.remaining - 1,
    }));
  };

  const shuffleDeck = async function () {
    setIsShuffling(true);
    await axios.get(`${API_DRAW_URL}/${deckId.current}/shuffle/`);
    setCard(null);
    setDeck((prevDeck) => ({
      ...prevDeck,
      remaining: prevDeck.remaining,
    }));
    setIsShuffling(false);
  };

  return (
    <div>
      <button onClick={getCard} disabled={isShuffling || deck?.remaining === 0}>
        Draw a Card
      </button>
      <button onClick={shuffleDeck} disabled={isShuffling}>
        {isShuffling ? "Shuffling..." : "Shuffle Deck"}
      </button>
      {card && <Card card={card} />}
    </div>
  );
}
