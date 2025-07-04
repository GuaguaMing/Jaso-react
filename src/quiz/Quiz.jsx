import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from "../../scss/pages/quiz/quiz.module.scss";
import { useNavigate } from "react-router-dom";
import QuizAni from "../1components/QuizAni";
import NavbarHidden from "../1components/NavbarHidden";




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
    // image: "",
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
    // image: "",
  },
  {
    title: "飲食習慣",
    question: "你每天是否有攝取富含蛋白質的食物（豆腐、豆類、堅果等）？",
    options: ["每天都有", "有時候", "很少"],
    animationKey: "q1", // 新增
  },
  {
    title: "飲食習慣",
    question: "你每天是否有補充維生素B12（營養酵母、強化植物奶或海藻）？",
    options: ["每天都有", "有時候", "很少"],
    animationKey: "q2", // 新增
  },
  {
    title: "飲食習慣",
    question: "你每天是否有攝取含鐵食物（黑豆、紅莧菜、南瓜籽）？",
    options: ["每天都有", "有時候", "很少"],
    animationKey: "q3", // 新增
  },
  {
    title: "飲食習慣",
    question: "你每天是否有補充 Omega-3（亞麻仁籽、奇亞籽、海藻油）？",
    options: ["每天都有", "有時候", "很少"],
    animationKey: "q4", // 新增
  },
  {
    title: "飲食習慣",
    question: "你每天是否有攝取富含鈣質的食物（豆腐、芝麻醬、黑芝麻、芥藍）？",
    options: ["每天都有", "有時候", "很少"],
    animationKey: "q5", // 新增
  },
  {
    title: "飲食習慣",
    question: "你每天是否有日曬或補充維生素D（強化植物奶、曬太陽10分鐘以上）？",
    options: ["每天都有", "有時候", "很少"],
    animationKey: "q6", // 新增
  },
  {
    title: "健康狀況",
    question: "你是否經常感到疲倦、虛弱或容易氣喘？",
    options: ["是", "否"],
    animationKey: "q7", // 新增
  },

  {
    title: "健康狀況",
    question: "你是否有經常性的偏頭痛或或注意力不集中？",
    options: ["是", "否"],
    animationKey: "q8", // 新增

  },
  {
    title: "健康狀況",
    question: "你是否經常感到便秘或腸胃不適？",
    options: ["是", "否"],
    animationKey: "q9", // 新增

  },
  {
    title: "健康狀況",
    question: "你是否經常感到肌肉抽筋或手腳發麻？",
    options: ["是", "否"],
    animationKey: "q10", // 新增

  }
];



const Quiz = ({ cartItems = [], cartAnimation = false, onToggleCart }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [playAnimation, setPlayAnimation] = useState(false); // 控制播放動畫

  const handleIntroSelection = (value) => {
    if (value.includes("不同意")) {
      alert("若不同意隱私政策，將無法進行評估，感謝您的理解！");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };


  const handleChange = (name, value) => {
  setAnswers((prev) => ({ ...prev, [name]: value }));
  
  // 加入驗證
  const fieldErrors = validateField(name, value);
  setErrors(prev => ({ ...prev, ...fieldErrors }));
  
  if (Object.keys(fieldErrors).length === 0) {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }
};

  // 驗證函數
const validateField = (name, value) => {
  const errors = {};
  
  switch (name) {
    case 'age':
      if (!value || value === '') {
        errors.age = '請輸入年齡';
      } else if (value < 1 || value > 120) {
        errors.age = '請輸入有效範圍（1~120）';
      }
      break;
    case 'height':
      if (!value || value === '') {
        errors.height = '請輸入身高';
      } else if (value < 50 || value > 250) {
        errors.height = '請輸入有效範圍（50-250）';
      }
      break;
    case 'weight':
      if (!value || value === '') {
        errors.weight = '請輸入體重';
      } else if (value < 20 || value > 300) {
        errors.weight = '請輸入有效範圍（20~300）';
      }
      break;
    case 'gender':
      if (!value) errors.gender = '請選擇生理性別';
      break;
    case 'activity':
      if (!value) errors.activity = '請選擇運動量';
      break;
  }
  return errors;
};

// 在現有的 useState 後面加入：
const [errors, setErrors] = useState({});
const [showErrors, setShowErrors] = useState({});


  const handleRadioClick = (qIdx, value) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: value }));

    if (questions[qIdx].type !== "form") {
      if (qIdx === questions.length - 1) {
        // ✅ 是最後一題且有選答案，顯示提交按鈕
        setShowSubmitButton(true);
      } else {
        setTimeout(() => {
          setCurrentQuestion(qIdx + 1);
        }, 200);

      }
    }
  };



  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  const [isHovered, setIsHovered] = useState(false);

  const next = () => {
  if (questions[currentQuestion].type === "form") {
    const requiredFields = questions[currentQuestion].fields.map(f => f.name);
    let hasErrors = false;
    const newShowErrors = {};

    requiredFields.forEach(field => {
      const value = answers[field];
      const fieldErrors = validateField(field, value);
      
      if (Object.keys(fieldErrors).length > 0) {
        hasErrors = true;
        newShowErrors[field] = true;
        setErrors(prev => ({ ...prev, ...fieldErrors }));
      }
    });

    if (hasErrors) {
      setShowErrors(prev => ({ ...prev, ...newShowErrors }));
      return; // 阻止進入下一題
    }
  }

  // 原有的 next 邏輯
  if (currentQuestion < questions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    console.log("問卷完成", answers);
    navigate("/result", { state: { answers } });
  }
};

  const handleSubmit = () => {
    setIsSubmitting(true); // 顯示 Loading 畫面

    const { gender, age, height, weight, activity } = answers;

    // 計算 BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);

    // 計算 BMR
    const bmr =
      gender === "男"
        ? 66 + 13.7 * weight + 5 * height - 6.8 * age
        : 655 + 9.6 * weight + 1.8 * height - 4.7 * age;

    // 活動係數
    const activityFactors = {
      "幾乎不動": 1.2,
      "輕度": 1.375,
      "中度": 1.55,
      "高度": 1.725,
    };

    const tdee = Math.round(bmr * activityFactors[activity]);

    // 六題 radar chart 分數（第 2~7 題）
    const radarKeys = ["protein", "b12", "iron", "omega3", "ca", "d"];

    const radarScores = {};
    radarKeys.forEach((key, i) => {
      const value = answers[i + 2];
      radarScores[key] =
        value === "每天都有" ? 10 : value === "有時候" ? 6 : 2;
    });

    // 四題症狀選項（第 8~11 題）
    const conditions = {
      fatigue: answers[8] === "是",
      headache: answers[9] === "是",
      constipation: answers[10] === "是",
      cramp: answers[11] === "是",
    };

    // 模擬轉場 delay
    setTimeout(() => {
      navigate("/result", {
        state: {
          bmi,
          bmr: Math.round(bmr),
          tdee,
          radarScores,
          conditions,
        },
      });
    }, 3000); // 根據動畫時間可調整
  };


  const prev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  // ✅ LoadingPage 元件：臉左右切換 + 跳動小點點動畫
  const LoadingPage = () => {
    const [isLeft, setIsLeft] = useState(true);
    const [dotCount, setDotCount] = useState(1);

    useEffect(() => {
      const faceInterval = setInterval(() => {
        setIsLeft(prev => !prev);
      }, 600);

      const dotInterval = setInterval(() => {
        setDotCount(prev => (prev % 3) + 1);
      }, 400);

      return () => {
        clearInterval(faceInterval);
        clearInterval(dotInterval);
      };
    }, []);

    return (
      <div className={styles.loadingContainer}>
        <img
          src={
            isLeft
              ? `${import.meta.env.BASE_URL}assets/loading-face-2.svg`
              : `${import.meta.env.BASE_URL}assets/loading-face.svg`
          }
          alt="loading face"
          className={styles.faceImage}
        />
        {/* <img
          src={isLeft ? "/assets/loading-face-2.svg" : "/assets/loading-face.svg"}
          alt="loading face"
          className={styles.faceImage}
        /> */}
        <p className={styles.text}>測驗結果生成中{'.'.repeat(dotCount)}</p>
        <p className={styles.subtext}>請稍等一下哦</p>
      </div>
    );
  };

  const renderQuestion = () => {

    const q = questions[currentQuestion];
    //     if (playAnimation) {
    //   return (
    //     <div className={styles.animationWrapper}>
    //       <img src={questions[currentQuestion].image}
    //         alt="animation"
    //         className={styles.animationImage}
    //       />
    //     </div>
    //   );
    // }

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
            {/* <img src={q.image} alt="illustration" /> */}
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
                      <label className={styles["field-label"]}>
  {field.label} <span className={styles["required-mark"]}>*</span>
</label>
                      <div className={styles["option-group"]}>
                        {field.options.map((opt) => (

                                <label key={opt} className={`${styles["option-1"]} 
  ${answers[field.name] === opt ? styles.selected : ''}
  ${showErrors[field.name] && errors[field.name] ? styles.error : ''}`}>
                            <input
                              type="radio"
                              name={field.name}
                              value={opt}
                              checked={answers[field.name] === opt}
                              onChange={() => handleChange(field.name, opt)}

                            // onChange={() => handleRadioChange(currentQuestion, opt)}
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
                          <label className={styles["field-label"]}>
  {field.label} <span className={styles["required-mark"]}>*</span>
</label>

                        <div className={styles["container"]}>
                          <div className={`${styles["drop"]} ${
  showErrors[field.name] && errors[field.name] ? styles.error : 
  answers[field.name] && !errors[field.name] && showErrors[field.name] ? styles.success : ''
}`}
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
                                                  <label className={styles["field-label"]}>
  {field.label} <span className={styles["required-mark"]}>*</span>
</label>

                        <input
  className={`${styles["form-input"]} ${
    showErrors[field.name] && errors[field.name] ? styles.error : 
    answers[field.name] && !errors[field.name] && showErrors[field.name] ? styles.success : ''
  }`}
  type={field.type}
  name={field.name}
  value={answers[field.name] || ""}
  placeholder={field.placeholder}
  onChange={(e) => handleChange(field.name, e.target.value)}
  onBlur={() => setShowErrors(prev => ({ ...prev, [field.name]: true }))}
/>{showErrors[field.name] && errors[field.name] && (
  <div className={styles["error-message"]}>
    {errors[field.name]}
  </div>
)}
                      </div>
                    </div>

                  );
                }
              })}
            </div>
          </div>
          <div className={styles.questionRight}>
            {/* <img src={q.image} alt="illustration" /> */}
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
              alt="back" />

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

              <label key={i}
                className={`${styles.option} 
              ${answers[currentQuestion] === opt ? styles.selected : ''}`}>


                <input
                  type="radio"
                  name={`q${currentQuestion}`}
                  value={opt}
                  checked={answers[currentQuestion] === opt}
                  onClick={() => handleRadioClick(currentQuestion, opt)}
                />
                {opt}
              </label>


            ))}
          </div>
        </div>
        <div className={styles.questionRight}>
          <QuizAni questionKey={questions[currentQuestion].animationKey} />
        </div>
      </div>
    );
  };

  if (isSubmitting) {
    return <LoadingPage />;
  }
  return (
    <>
     <NavbarHidden 
        cartItems={cartItems} 
        cartAnimation={cartAnimation}
        onToggleCart={() => {
          // 這裡可以處理購物車切換邏輯
          console.log('Toggle cart from navbar');
        }}/>
    <div className={styles.quizContainer}>
      {/* 問題內容 */}
      {renderQuestion()}
      {showSubmitButton && (
        <div className={styles.navigationButtons}>
          {isSubmitting ? (
            <LoadingPage />
          ) : (
            <button
              onClick={handleSubmit} disabled={isSubmitting}
            >
              提交
            </button>
          )}
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
    </>

  );
};
export default Quiz;
