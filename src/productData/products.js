import { hover } from "motion";

const products = [
    {
        id: 1, tags:"維鈣+D3雙效配方", name: "鈣心定植物鈣", 
        desc: "本產品特別為素食者設計，嚴選100%植物來源原料，選用海藻鈣與紅藻鈣，富含天然鈣質，並添加鎂、D3與K2，幫助鈣質有效吸收與利用，穩定打造強健骨本。溫和純淨的全素配方，適合長期食用，幫助維持體力、提升代謝、支持免疫系統與骨骼健康。", 
        price: 365,
        image: {
            default: "/images/Pd/Ca-default.svg",
            hover: "/images/Pd/Ca-hover.svg"
        }
    },
    {
        id: 2, tags:"植萃綜合維他命配方", name: "素超群膠囊", 
        desc: "本產品特別為素食者設計，嚴選100%植物來源原料，全面補充13種必需維生素與8種關鍵礦物質，讓您每日獲得均衡的營養支持。其溫和純淨的全素配方，無動物性成分，適合長期食用，並能有效幫助維持體力、提升新陳代謝，強化免疫系統，並支持骨骼健康。", 
        price: 420,
        image: {
            default: "./images/Pd/N-default.svg",
            hover: "./images/Pd/N-hover.svg",
        }
    },
    {
        id: 3,tags:"幫植萃維生素D（藻類D3）膠囊", name: "素D速補D",
         desc: "本產品特別為素食者設計，選用高品質海藻來源維生素D，有效提高鈣質吸收與骨骼健康。長期缺乏維生素D會影響骨密度，增加骨折風險。這款維生素D補充劑，溫和純淨的全素配方適合日常使用，尤其對於長期待在室內或缺乏日照的素食者來說，能有效補充日常所需，維持整體健康與活力。", 
         price: 380,
        image: {
            default: "./images/Pd/D-default.svg",
            hover: "./images/Pd/D-hover.svg"
        }
    },
    {
        id: 4,tags:"純素海藻OMEG3", name: "油你真好植物膠囊", 
        desc: "本產品特別為素食者設計，嚴選100%植物來源原料，選用高品質海藻油，富含DHA與EPA，幫助支持心血管、腦部與眼睛健康。溫和純淨的全素配方，適合長期食用，有助於提升專注力、維持正常的心臟功能，並支持大腦與視力健康。", 
        price: 250,
        image: {
            default: "./images/Pd/Omg3-default.svg",
            hover: "./images/Pd/Omg3-hover.svg"
        }
    },
    {
        id: 5,tags:"嚴選100%植物來源維生素B12", name: "補B不累口含錠", 
        desc: "本產品特別為素食者設計，嚴選100%植物來源維生素B12，幫助補充缺乏的營養，支持神經系統與造血功能，提升能量與集中力。溫和純淨的全素配方，適合長期食用，有助於維持正常的神經健康、增強體力，並支持免疫系統運作。", 
        price: 520,
        image: {
            default: "./images/Pd/B12-default.svg",
            hover: "./images/Pd/B12-hover.svg"
        }
    },
    { id: 6,tags:"嚴選100%植物來源 植萃鐵+B群補給", name: "鐵了心膠囊", 
        desc: "本產品特別為素食者設計，嚴選100%植物來源鐵質，並添加維生素C，幫助提升鐵的吸收與利用，支持紅血球生成與能量代謝。溫和純淨的全素配方，適合長期食用，有助於維持正常的血紅素水平，改善體力，提升活力，並支持免疫系統健康。", 
        price: 490, 
        image:{
            default:"./images/Pd/Fe-default.svg",
            hover:"./images/Pd/Fe-hover.svg"
        }  },
];

export default products;