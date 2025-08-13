import "../pages/DeckSelection.css";
import { deckInfo } from "../data/deckInfo";
import { Link } from "react-router-dom";

function DeckSelection() {
  return (
    <main className="card-page-main">
      <h1>Select the Deck of your Choice</h1>

      <div className="deck-card-container">
        {deckInfo.map((deck) => (
          <div className="card-page">
            <img className="card-image" src={deck.image} alt="card" />
            <h2 className="card-header">{deck.name}</h2>
            <p className="card-text">
              This is a short description inside the card.
            </p>
            <hr />
            <div className="card-bottom">
              <Link to={deck.link}>
                <button className="card-button">Add</button>
              </Link>
              <span>{deck.status}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default DeckSelection;
