import React, { useState } from "react";
import styles from "./Game.module.css";

export default function Game() {

  const questions = [
    {
      question: "I have keys but no locks. What am I?",
      answer: "Keyboard",
      hints: [
        "Used with a computer",
        "You type on it",
        "It has letters and numbers",
      ],
    },
    {
      question: "I speak without a mouth and hear without ears. What am I?",
      answer: "Echo",
      hints: [
        "You can hear me in mountains",
        "I repeat what you say",
        "A sound that reflects",
      ],
    },
    {
      question:
        "I'm tall when I'm young, and I'm short when I'm old. What am I?",
      answer: "Candle",
      hints: [
        "Used during power outages",
        "It melts over time",
        "It gives light",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [Hint, setHint] = useState(0);
  const [score, setScore] = useState(0);


  return (
    <div className={styles.card}>
      <h2 className={styles.question}>Dumb Charades Game</h2>
      <p className={styles.question}>
        Question {currentQuestion + 1}: {questions[currentQuestion].question}
      </p>
      <p className={styles.hint}>
        Hint: {questions[currentQuestion].hints[Hint]}
      </p>
      <button className={styles.button} >
        Show Next Hint
      </button>

      <div>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Enter answer"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button className={styles.button} >
          Submit Answer
        </button>
      </div>

      {/* <p className={styles.score}>Your Score: {score}</p> */}
    </div>
  );
}
