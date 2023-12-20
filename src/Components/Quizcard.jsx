import React, { useState } from 'react';
import javascriptQuestions from './Question.js';
import './card.css';

function Quizcard() {
  const [selectedButton, setSelectedButton] = useState(null);

  let [questionNumber, setQuestionNumber] = useState(1);

  let [userInput, setUserInput] = useState('');

  let [changeQuestion, setChangeQuestion] = useState(Math.ceil(Math.random()));

  let Questions = javascriptQuestions[changeQuestion];

  function getValue(e) {
    // e.preventDefault();
    setUserInput(e.target.value);
    setSelectedButton(e.target.id);
  }

  // function for the user input processing.
  function checkInput(e) {
    e.preventDefault();
    console.log(userInput);
    if (userInput == Questions.correctAnswer) {
      changeCardQuestion();
      setQuestionNumber(questionNumber + 1);
    }
    console.log(Questions.correctAnswer);
    e.target.checked = false;
  }

  // function for changing Question.
  function changeCardQuestion() {
    console.log('question changed');
    let number = Math.floor(Math.random() * 10);
    setChangeQuestion(number);
    setUserInput('');
    setSelectedButton(null);
    document
      .querySelectorAll('input')
      .forEach((button) => (button.clicked = false));
  }


  return (
    <div className="quiz-card text-white flex flex-col items-center bg-gray-600 p-4 text-white w-auto rounded-xl">
      <h2 className="p-2 text-lg font-bold">
        Question Number {questionNumber}
      </h2>

      <p className="m-2 text-xl font-bold">{Questions.question}</p>

      <div className= "submit-class m-1">
        <form onSubmit={getValue}>
          <input
            type="button"
            id="option1"
            name=""
            value={Questions.options.a}
            onClick={getValue}
            style={{
              background:
                selectedButton === 'option1' ? 'white' : 'rgb(219, 29, 233)',
            }}
          />
          <br />
          <input
            type="button"
            id="option2"
            name=""
            value={Questions.options.b}
            onClick={getValue}
            style={{
              background:
                selectedButton === 'option2' ? 'white' : 'rgb(33, 207, 56)',
            }}
          />
          <br />

          <input
            type="button"
            id="option3"
            name=""
            value={Questions.options.c}
            onClick={getValue}
            style={{
              background:
                selectedButton === 'option3' ? 'white' : 'rgb(250, 207, 18)',
            }}
          />
          <br />

          <input
            type="button"
            id="option4"
            name=""
            value={Questions.options.d}
            onClick={getValue}
            style={{
              background:
                selectedButton === 'option4'
                  ? 'white'
                  : 'rgba(20, 101, 251, 0.841)',
            }}
          />
          <br />
          <button
            className="submit-btn m-4 bg-white text-gray-500 p-1 rounded-md"
            type="submit"
            onClick={(getValue, checkInput)}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quizcard;
