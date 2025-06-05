import React, { useState } from 'react';
import './guide.css';
import nutrientData from './nutrient-Data';
import NutrientCard from './NutrientCard';
import GuideModal from './GuideModal';

const App = () => {
  const [selectedNutrient, setSelectedNutrient] = useState(null);

  const handleCardClick = (key) => {
    setSelectedNutrient(nutrientData[key]);
  };

  const handleClose = () => {
    setSelectedNutrient(null);
  };

  return (
    <section className="vege-library">
      <div className="vege-header">
        <h1 className="vege-title">素食庫</h1>
        <div className="vege-text">
          <h3>六大營養素</h3>
          <p>
            素食者的飲食需要特別關注一些關鍵的營養素，包括維生素B12、維生素D、鈣質、鐵質、蛋白質和Omega-3脂肪酸。
            由於這些營養素大多來自動物性食品，素食者需從蔬果和堅果等植物性來源補充或搭配素食補充產品。
          </p>
        </div>
      </div>

      <div className="card-container">
        {Object.entries(nutrientData).map(([key, data]) => (
          <NutrientCard key={key} data={data} id={key} onClick={() => handleCardClick(key)} />
        ))}
      </div>

      {selectedNutrient && (
        <>
          <div className="guide-overlay show" onClick={handleClose}></div>
          <GuideModal data={selectedNutrient} onClose={handleClose} />
        </>
      )}
    </section>
  );
};

export default App;