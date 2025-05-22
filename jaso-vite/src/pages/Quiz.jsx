import React, { useState } from "react";
import styles from "../css/quiz.module.scss";

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
    question: "",
    type: "form",
    fields: [
      { label: "生理性別", name: "gender", type: "radio", options: ["男", "女"] },
      { label: "年齡", name: "age", type: "number", placeholder: "請輸入年齡" },
      { label: "身高(cm)", name: "height", type: "number", placeholder: "請輸入身高" },
      { label: "體重 (kg)", name: "weight", type: "number", placeholder: "請輸入體重" },
      {
        label: "運動量",
        name: "activity",
        type: "select",
        placeholder: "請選擇",
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
  {
    title: "飲食習慣",
    question: "你每天是否有攝取富含維生素B12的食物或補充劑？",
    options: ["每天都有", "偶爾有", "很少或沒有"],
    image: "https://i.imgur.com/sA3e2Ah.png"
  },
  {
    title: "飲食習慣",
    question: "你每天攝取的蛋白質主要來自哪類食物？",
    options: ["豆類及其製品", "穀物", "堅果與種子", "蔬菜"],
    image: "https://i.imgur.com/GNj2aHo.png"
  },
  {
    title: "飲食習慣",
    question: "你是否每天攝取富含鈣質的食物或補充劑？",
    options: ["每餐都有", "每天有", "很少或沒有"],
    image: "https://i.imgur.com/sUcyKJf.png"
  },
  {
    title: "飲食習慣",
    question: "你的日常飲食中，攝取的熱量大多來自哪種食物？",
    options: ["蔬菜和水果（低熱量）", "穀物（中等熱量）", "豆類和堅果（較高熱量）", "高加工食物或甜食（高熱量）"],
    image: "https://i.imgur.com/dz0lOBc.png"
  },
  {
    title: "病痛症狀",
    question: "你是否經常感到疲倦、虛弱或容易氣喘？",
    options: ["是", "否"],
    image: "https://i.imgur.com/UYXqvOB.png"
  },
  {
    title: "病痛症狀",
    question: "你是否有經常性的偏頭痛或頭痛？",
    options: ["是", "否"],
    image: "https://i.imgur.com/hKYzqJ9.png"
  },
  {
    title: "病痛症狀",
    question: "你是否經常感到飢餓，或吃不飽？",
    options: ["是", "否"],
    image: "https://i.imgur.com/Zjowti7.png"
  },
  {
    title: "病痛症狀",
    question: "你是否經常感到便秘或腸胃不適？",
    options: ["是", "否"],
    image: "https://i.imgur.com/ykF9EZY.png"
  },
  {
    title: "病痛症狀",
    question: "你是否經常感到肌肉抽筋或手腳發麻？",
    options: ["是", "否"],
    image: "https://i.imgur.com/BYjRxl3.png"
  }
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
    setAnswers((prev) => ({ ...prev, [qIdx]: value }));
  
    if (questions[qIdx].type !== "form") {
      if (qIdx === questions.length - 1) {
        // ✅ 是最後一題，顯示提交按鈕
        setShowSubmitButton(true);
      } else {
        setTimeout(() => {
          setCurrentQuestion(qIdx + 1);
        }, 200);
      }
    }
  };
  
  
  
  const [isSubmitting, setIsSubmitting] = useState(false);
const [showSubmitButton, setShowSubmitButton] = useState(false);


  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const [isHovered, setIsHovered] = useState(false);


  const next = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 到最後一題，執行提交或跳轉
      console.log("問卷完成", answers);
      // 你可以改成跳轉頁面
      window.location.href = "/result"; // 或呼叫 API 等
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

        </div>
          <div className={styles.questionCenter}>
            <h1 className={styles.titleWithImage}>
              <span className={styles.titleIcon} />
              <span dangerouslySetInnerHTML={{ __html: q.title }} />
            </h1>
            <div dangerouslySetInnerHTML={{ __html: q.question }} />
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
          <button className={styles.backButton} onClick={prev}
              onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>

  <img
    src={isHovered ? "./assets/back-arrow-hover.svg" : "./assets/back-arrow.svg"}
    alt="back"
  />
          
          </button>
        </div>
          <div className={styles.questionCenter}>
            <h4 className={styles.titleWithImage}>
              <span className={styles.titleIcon} />
              {q.title}
            </h4>

            <h2>{q.question}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {q.fields.map((field, idx) => {
                if (field.type === "radio") {
                  return (
                    <div key={idx} className={styles["form-group-1"]}>
                      <label className={styles["field-label"]}>{field.label}</label>
                      <div className={styles["option-group"]}>
                        {field.options.map((opt) => (
                          <label key={opt} className={styles["option-1"]}>
                            <input
                              type="radio"
                              name={field.name}
                              value={opt}
                              checked={answers[field.name] === opt}
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
                      <div className={styles["form-group"]}>
                        <label className={styles["field-label"]}>{field.label}</label>

                        <div className={styles["container"]}>
                          <div className={styles["drop"]}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            <div



                              className={styles["dropOption"]}
                              onClick={() => setDropdownOpen((prev) => ({
                                ...prev,
                                [field.name]: !prev[field.name]
                              }))}
                            >
                              <span>{answers[field.name] || [field.placeholder]}</span>
                            </div>

                            {dropdownOpen[field.name] && (
                              <ul className={styles["dropdown"]}>
                                {field.options.map((opt, idx) => (
                                  <li
                                    key={idx}
                                    onClick={() => {
                                      setAnswers({ ...answers, [field.name]: opt });
                                      setDropdownOpen((prev) => ({
                                        ...prev,
                                        [field.name]: false
                                      }));
                                    }}
                                  >
                                    {opt}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                  );

                } else {
                  return (
                    <div key={idx}>
                      <div className={styles["form-group"]}>
                        <label className={styles["field-label"]}>{field.label}</label>

                        <input
                          className={styles["form-input"]}
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          onChange={handleChange}
                        />
                      </div>
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

          <button className={styles.backButton} onClick={prev}
              onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}>
  <img
    src={isHovered ? "./assets/back-arrow-hover.svg" : "./assets/back-arrow.svg"}
    alt="back"/>
          
          </button>
        </div>
        <div className={styles.questionCenter}>
          <h4 className={styles.titleWithImage}>
            <span className={styles.titleIcon} />
            {q.title}
          </h4>

          <h2>{q.question}</h2>
          <div className={styles.options}>
            {q.options.map((opt, i) => (

<label key={i} className={styles.option}>

<input
type="radio"
name={`q${currentQuestion}`}
value={opt}
checked={answers[currentQuestion] === opt}
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
    <div className={styles.quizContainer}>
      {/* 問題內容 */}
      {renderQuestion()}
      {showSubmitButton && (
  <div className={styles.navigationButtons}>
    <button
      onClick={() => {
        setIsSubmitting(true);
        setTimeout(() => {
          window.location.href = "/result";
        }, 2000);
      }}
      disabled={isSubmitting}
    >
      {isSubmitting ? "提交中..." : "提交"}
    </button>
  </div>
)}

      {questions[currentQuestion].type === "form" && (
  <div className={styles.navigationButtons}>
    <button onClick={next}>
      {currentQuestion === questions.length - 1 ? "提交" : "下一題"}
    </button>
  </div>
  
)}


  
      {/* 進度條 */}
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>
    </div>
  );
  
};




export default Quiz;
