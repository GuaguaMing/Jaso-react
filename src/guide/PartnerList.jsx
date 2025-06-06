import React from 'react';

// const PartnerList = ({ partners }) => {
//   return (
//     <div className={styles.partnerList}>
//       {partners.map((partner, index) => (
//         <PartnerImage
//           key={index}
//           src={partner.src}
//           hover={partner.hover}
//           hover2={partner.hover2}
//           name={partner.name}
//         />
//       ))}
//     </div>
//   );
// };

// export default PartnerList;
export default function PartnerList({ partners }) {
  return (
    <div className="partnerList">
      {partners.map((partner, idx) => (
        <div className="partnerItem" key={idx}>
          <div className="img-hover-wrap">
            <img src={partner.src} alt={partner.name} className="img-default" />
            {partner.hover && <img src={partner.hover} alt="" className="img-hover1" />}
            {partner.hover2 && <img src={partner.hover2} alt="" className="img-hover2" />}
          </div>
          <p>{partner.name}</p>
        </div>
      ))}
    </div>
  );
}
