import { useState } from "react";
import reviews from "./data";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// each person object contains id, name, job, image, text

const App = () => {
  const [people, setPeople] = useState(reviews);

  return (
    <main>
      {people.map((person) => {
        return (
          <div className="review">
            <img
              src={person.image}
              alt={person.name}
              className="img-container"
            />
            <h2 className="author">{person.name}</h2>
            <span className="job">{person.job}</span>
            <p className="info">{person.text}</p>
            <div>
              <IoIosArrowBack className="prev-btn" />
              <IoIosArrowForward className="next-btn" />
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default App;
