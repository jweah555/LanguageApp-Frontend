import "../pages/Home.css";
import heartGif from "../assets/images/heart.gif";

import { StudySelect } from "../data/studySelect";
import { FunFacts } from "../data/funFacts";

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
        {StudySelect.map((item) => (
          <div className="language-option">
            <img src={item.image} />
            {item.text}
          </div>
        ))}
      </section>
      <section className="section3">
        <h2>Fun Facts</h2>
        <div className="lists">
          {FunFacts.map((facts) => (
            <div className="list-sec">
              <ul className="language-list">
                <h3 style={{ color: "#FF6868" }}>{facts.title}</h3>
                <li>{facts.fact1}</li>
                <li>{facts.fact2}</li>
                <li>{facts.fact3}</li>
                <li>{facts.fact4}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
