import "../pages/Home.css";
import repeat from "../assets/images/repeat.png";
import flashCards from "../assets/images/flashcards.png";
import translation from "../assets/images/translation.png";
import grammer from "../assets/images/grammer2.png";
import heartGif from "../assets/images/heart.gif";

function Home() {
  return (
    <main className="main-body">
      <section className="section1">
        <h1 className="explore">
          Explore Deci <img className="heart" src={heartGif} />{" "}
        </h1>
        <span>
          Create and study flashCards in less time using AI-Powered Spaced
          Repetition that adapts to your learning
        </span>
      </section>
      <secetion className="section2">
        <h2>Select Catagory</h2>
        <span>✌️ 🇪🇸 🇺🇸 🇫🇷 👍</span>
      </secetion>
      <section className="prac-options">
        <div className="language-option">
          <img src={repeat} />
          Spaced Rep Dec
        </div>
        <div className="language-option">
          <img src={flashCards} />
          Normal Prac Dec
        </div>
        <div className="language-option">
          <img src={translation} />
          Translation
        </div>
        <div className="language-option">
          <img src={grammer} />
          Grammer Prac
        </div>
      </section>
      <section className="section3">
        <h2>Fun Facts</h2>
        <div className="lists">
          <div className="list-sec">
            <ul className="spanish-list">
              <h3 style={{ color: "#FF6868" }}>Spanish</h3>
              <li>El español se habla en 21 países.</li>
              <li>La letra “ñ” no existe en otros idiomas.</li>
              <li>El español solo tiene cinco vocales: a, e, i, o, u.</li>
              <li>
                En español, todos los sustantivos tienen género: masculino o
                femenino.
              </li>
            </ul>
          </div>
          <div className="list-sec">
            <ul className="english-list">
              <h3 style={{ color: "#FF6868" }}>English</h3>
              <li>It has over 170,000 words in current use.</li>
              <li>The word “set” has the most meanings in English.</li>
              <li>English borrows many words from Latin, French, and German</li>
              <li>The longest English word without a vowel is “rhythm.”</li>
            </ul>
          </div>

          <div className="list-sec">
            <ul className="french-list">
              <h3 style={{ color: "#FF6868" }}>French</h3>
              <li>Le français est parlé sur 5 continents.</li>
              <li>Le mot « bonjour » signifie « bonne journée ».</li>
              <li>Le français utilise des accents comme « é » et « ç ».</li>
              <li>Le français a 17 façons de dire « vous ».</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
