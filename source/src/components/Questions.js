import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import "../App.css";

export default function Questions(props) {
  const [fck_btns, fck_btns_setMEUP] = React.useState();


  // Shake it Baby! Shake it!
  useEffect(() => {
    let shakeIt = [updatedAnswersCorrect, updatedAnswersIncorrect];
    shakeIt.sort(() => Math.random() - 0.5);
    fck_btns_setMEUP(shakeIt);
  }, []);

  const updatedAnswersIncorrect = props.incorrect_answers.map((button) => {
    return (
      <button
        id="inc_answ"
        className="btns"
        onClick={(e) => {
          console.log(e.target);
          e.target.classList.add("rred");
          e.target.disabled = true;
        }}
      >
        {atob(button)}
      </button>
    );
  });
  const updatedAnswersCorrect = (
    <button
      id="cor_answ"
      className="btns"
      onClick={(e) => {
          e.target.classList.add("bblue");
          e.target.disabled = true;

      }}
    >
      {atob(props.correct_answer)}
    </button>
  );

  return (
    <section>

    <div className="uber--container">
      <p>{atob(props.question )}</p>
      <div className="btn-container">
      {fck_btns}
      </div>
    </div>
    </section>
  );
}
