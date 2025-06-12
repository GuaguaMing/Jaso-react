import React, { useEffect, useState } from 'react';
import styles from "../../scss/pages/1home/apphome.module.scss";


const productData = [
  {
    product: './images/product_N.png',
    role: './assets/protein.svg',
    speech: '自從吃素後感覺體力變差，運動完還一直肌肉痠痛？'
  },
  {
    product: './images/product_B12.png',
    role: './assets/b12.svg',
    speech: '常覺得頭暈疲憊、注意力不集中，吃素之後變得更嚴重？'
  },
  {
    product: './images/product_Fe.png',
    role: './assets/iron.svg',
    speech: '最近常臉色蒼白、容易喘氣，月經期間也特別疲倦？'
  },
  {
    product: './images/product_Omg.png',
    role: './assets/omega-3.svg',
    speech: '腦袋常打結、情緒低落，好像比較難專注思考？'
  },
  {
    product: './images/product_D.png',
    role: './assets/d.svg',
    speech: '白天無精打采、想睡覺，曬不到太陽總覺得沒精神？'
  },
  {
    product: './images/product_Ca.png',
    role: './assets/ca.svg',
    speech: '牙齒變得敏感、膝蓋容易卡，連爬樓梯都覺得吃力？'
  }
];

const ProductSlider = () => {
  const [index, setIndex] = useState(0);
  const total = productData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const visibleRoles = Array.from({ length: 4 }, (_, i) => {
    return productData[(index + i) % total];
  });

  const currentItem = productData[index];

  return (
    <section className={styles.carouselSection}>
      <div className={styles.carouselScene}>
        <div className={styles.carouselTrack}>
          {visibleRoles.map((item, i) => {
            const angle = (i - 1) * 45; // center is index 1
            return (
              <div
                key={i}
                className={styles.carouselItem}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(600px)`
                }}
              >
                <img src={item.role} alt="角色" />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.leftDialog}>
        <p>{currentItem.speech}</p>
        <div className={styles.roundedTriangle}></div>
        <img src={currentItem.role} alt="主角" />
      </div>

      <div className={styles.centerPanel}>
        <figure><img src={currentItem.product} alt="商品圖" /></figure>
        <div className={styles.centerBottom}>
          <div className={styles.centerNeed}>Need <br /><p className={styles.span0}>大補帖!</p></div>
          <div className={styles.centerText}>
            <p className={styles.span1}>維生素超群膠囊</p>
            <p className={styles.span2}>植萃綜合維他命配方</p>
            <p className={styles.span3}>由於素食飲食可能缺乏的關鍵營養素，如B群、鐵、鋅與維生素D。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
