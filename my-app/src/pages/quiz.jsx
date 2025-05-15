import React, { useState } from "react";
import styles from "./_quiz.module.scss";

const questions = [
  {
    type: "intro",
    title: "綜合健康評估",
    question:
      "由 JASO+ 團隊設計 AI 營養問卷<br>完成評估需時約 5 分鐘。<br>針對問卷裡所提供的所有資訊都只會針對網站內部分析使用並不會外流，敬請放心！",
    options: [
      "本人同意 JASO+ 的隱私政策及使用條款，並開始評估",
      "本人不同意",
    ],
    image: "./assets/img/omega@3x.svg",
  },
  {
    title: "基本資料",
    question: "請填寫以下基本資料",
    type: "form",
    fields: [
      { label: "生理性別", name: "gender", type: "radio", options: ["男", "女"] },
      { label: "年齡", name: "age", type: "number", placeholder: "請輸入年齡" },
      { label: "身高 (cm)", name: "height", type: "number", placeholder: "請輸入身高" },
      { label: "體重 (kg)", name: "weight", type: "number", placeholder: "請輸入體重" },
      {
        label: "運動量",
        name: "activity",
        type: "select",
        options: ["幾乎不動", "輕度", "中度", "高度"],
      },
    ],
    image: "./assets/img/omega@3x.svg",
  },
  {
    title: "飲食習慣",
    question: "你每週是否攝取含鐵食物（如黑豆、紅莧菜、南瓜籽）？",
    options: ["是", "否"],
    image: "./assets/img/omega@3x.svg",
  },
  // ... 其他題目略
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleIntroSelection = (value) => {
    if (value.includes("不同意")) {
      alert("若不同意隱私政策，將無法進行評估，感謝您的理解！");
      window.location.href = "/";
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleRadioChange = (qIdx, value) => {
    setAnswers({ ...answers, [qIdx]: value });
  };

  const next = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const renderQuestion = () => {
    const q = questions[currentQuestion];

    if (q.type === "intro") {
      return (
        <div className={styles.questionContainer}>
          <div className={styles.questionLeft}>
            <h2 dangerouslySetInnerHTML={{ __html: q.title }} />
            <h4 dangerouslySetInnerHTML={{ __html: q.question }} />
            <div className={styles.options}>
              {q.options.map((opt, i) => (
                <label key={i} className={styles.option}>
                  <input
                    type="radio"
                    name="intro"
                    value={opt}
                    onClick={() => handleIntroSelection(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div className={styles.questionRight}>
            <img src={q.image} alt="illustration" />
          </div>
        </div>
      );
    }

    if (q.type === "form") {
      return (
        <div className={styles.questionContainer}>
          <div className={styles.questionLeft}>
            <h4>{q.title}</h4>
            <h2>{q.question}</h2>
            <div>
              {q.fields.map((field, idx) => {
                if (field.type === "radio") {
                  return (
                    <div key={idx}>
                      <label>{field.label}</label>
                      <div>
                        {field.options.map((opt) => (
                          <label key={opt}>
                            <input
                              type="radio"
                              name={field.name}
                              value={opt}
                              onChange={handleChange}
                            />
                            {opt}
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                } else if (field.type === "select") {
                  return (
                    <div key={idx}>
                      <label>{field.label}</label>
                      <select name={field.name} onChange={handleChange}>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                } else {
                  return (
                    <div key={idx}>
                      <label>{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className={styles.questionRight}>
            <img src={q.image} alt="illustration" />
          </div>
        </div>
      );
    }

    return (
      <div className={styles.questionContainer}>
        <div className={styles.questionLeft}>
          <h4>{q.title}</h4>
          <h2>{q.question}</h2>
          <div className={styles.options}>
            {q.options.map((opt, i) => (
              <label key={i} className={styles.option}>
                <input
                  type="radio"
                  name={`q${currentQuestion}`}
                  value={opt}
                  onChange={() => handleRadioChange(currentQuestion, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
        <div className={styles.questionRight}>
          <img src={q.image} alt="illustration" />
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderQuestion()}
      <div className="navigation-buttons" style={{ display: currentQuestion === 0 ? "none" : "flex" }}>
        <button onClick={prev} style={{ display: currentQuestion === 0 ? "none" : "inline-block" }}>上一題</button>
        <button onClick={next}>下一題</button>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Quiz;
