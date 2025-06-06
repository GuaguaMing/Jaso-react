
import React from 'react';
export default function NutrientCard({ nutrientKey, data, onClick }) {
  return (
    <div className="nutrient-card" onClick={onClick}>
      <img src={`${import.meta.env.BASE_URL}${data.icon}`} className="nutrient-img" alt={nutrientKey} />
      <div className="label">
        <h4>{nutrientKey}</h4>
        <p>{data.title.replace(/^\w+\s/, '')}</p>
      </div>
      <div className="partner-count">{data.partners.length}</div>
    </div>
  );
}
