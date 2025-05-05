import { useState } from "react";
import people from "./data";

import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaRandom,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    setIndex((currentIndex) => {
      const newRandomIndex = Math.round(currentIndex + Math.random());
      console.log(newRandomIndex);
      return checkIndex(newRandomIndex);
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={() => prevPerson()}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => nextPerson()}>
            <FaChevronRight />
          </button>
        </div>
        <button type="button" className="btn" onClick={() => randomPerson()}>
          <FaRandom />
          Surprise me!
        </button>
      </article>
    </main>
  );
};
export default App;
