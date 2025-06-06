
import React, { useState } from 'react';
import Navbar from '../1components/Navbar';
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
      <Navbar />
      <section className="vege-library">
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
