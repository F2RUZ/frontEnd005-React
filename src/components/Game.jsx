import React, { useState, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Game = () => {
  const questions = [
    {
      id: 1,
      question: "React nima?",
      options: ["Framework", "Library", "Language"],
      answer: "Library",
    },
    {
      id: 2,
      question: "useState nima uchun ishlatiladi?",
      options: ["UI yaratish", "State boshqarish", "API chaqirish"],
      answer: "State boshqarish",
    },
    {
      id: 3,
      question: "JSX nima?",
      options: ["JavaScript XML", "JavaScript Syntax", "HTML Code"],
      answer: "JavaScript XML",
    },
    {
      id: 4,
      question: "useEffect qachon ishlaydi?",
      options: [
        "Har renderda",
        "Faqat state o‘zgarganda",
        "Faqat komponent yaratganda",
      ],
      answer: "Har renderda yoki dependency o‘zgarganda",
    },
    {
      id: 5,
      question: "Props qayerga uzatiladi?",
      options: ["Parent → Child", "Child → Parent", "Global State"],
      answer: "Parent → Child",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (currentQuestion >= questions.length) {
      setShowResult(true);
    }
  }, [currentQuestion]);

  const handleAnswer = (option) => {
    if (!questions[currentQuestion]) return; // undefined oldini olish
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      toast.success("To‘g‘ri javob! 🎉");
    } else {
      toast.error("Noto‘g‘ri javob 😢");
    }

    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
    }, 500);
  };

  if (showResult) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Card
          className="text-center p-4 shadow-sm"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <Card.Body>
            <h2 className="mb-3">O'yin tugadi!</h2>
            <h3 className="mb-3">
              Sizning natijangiz: {score} / {questions.length}
            </h3>
            <Button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowResult(false);
              }}
              variant="success"
            >
              Qayta o‘ynash
            </Button>
          </Card.Body>
        </Card>
        <ToastContainer position="top-right" autoClose={2000} />
      </Container>
    );
  }

  const progress = (currentQuestion / questions.length) * 100;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        className="text-center p-4 shadow-sm"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <Card.Body>
          <ProgressBar now={progress} className="mb-3" />
          <h4 className="mb-4">{questions[currentQuestion]?.question}</h4>
          <div className="d-flex flex-column">
            {questions[currentQuestion]?.options.map((opt) => (
              <Button
                key={opt}
                onClick={() => handleAnswer(opt)}
                variant="primary"
                className="mb-2"
              >
                {opt}
              </Button>
            ))}
          </div>
          <p className="mt-3">Score: {score}</p>
        </Card.Body>
      </Card>
      <ToastContainer position="top-right" autoClose={2000} />
    </Container>
  );
};

export default Game;
