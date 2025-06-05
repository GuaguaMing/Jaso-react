import React from 'react';

const NutrientCard = ({ data, id, onClick }) => {
  return (
    <div className="nutrient-card" onClick={onClick}>
      <img src={data.icon} className="nutrient-img" alt={id} />
      <div className="label">
        <h4>{id.toUpperCase()}</h4>
        <p>{data.title}</p>
      </div>
      <div className="partner-count">{data.partners.length}</div>
    </div>
  );
};

export default NutrientCard;