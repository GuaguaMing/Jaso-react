
import React, { useState } from 'react';
// import Navbar from '../1components/Navbar';
import NutrientCard from './NutrientCard';
import GuideDetail from './GuideDetail';
import nutrientData from './nutrient-Data';
import './styles/guide.css';

export default function AppGuide() {
  const [selected, setSelected] = useState(null);
  const handleSelect = (key) => {
    console.log('點擊的營養素:', key);
    setSelected(key);
  };
  const handleClose = () => setSelected(null);

  return (
    <>
      {/* <Navbar /> */}
      <section className="vege-library">
        <div className="vege-header">
          <h1 className="vege-title">
            素 <span className="plus">＋</span>
            食庫
          </h1>
          <div className="vege-text">
            <h3>六大營養素</h3>
            <p>
              素食者的飲食需要特別關注一些關鍵的營養素，包括維生素B12、維生素D、鈣質、鐵質、蛋白質和Omega-3脂肪酸。
              由於這些營養素大多來自動物性食品，素食者需從蔬果和堅果等植物性來源補充或搭配素食補充產品。
            </p>
          </div>
        </div>

        {/* 卡片區塊 */}
        <div className="card-container">
          {Object.keys(nutrientData).map((key) => (
            <NutrientCard
              key={key}
              nutrientKey={key}
              data={nutrientData[key]}
              onClick={() => handleSelect(key)}
            />
          ))}
        </div>

        {/* 彈窗區塊 */}
        {selected && nutrientData[selected] && (
          <>
            <div className="guide-overlay show" onClick={handleClose} />
            <GuideDetail data={nutrientData[selected]} onClose={handleClose} />
          </>
        )}
      </section>
    </>
  );
}
