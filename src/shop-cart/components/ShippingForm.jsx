import React, { useState } from 'react';

function ShippingForm({ onNextStep, setFormData }) {
    const [localForm, setLocalForm] = useState({
        name: '',
        email: '',
        phone: '',
        recipient: '',
        recipientPhone: '',
        address: '',
        note: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalForm({ ...localForm, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(localForm); // ✅ 把本地狀態傳回 App
        onNextStep(); // 進入下一步
    };

    return (
        <>
            <div className="bg-light card border-0 rounded-4 mb-3 py-2">
                <div className="card-body py-2">
                    <h5 className="mb-0">填寫資料</h5>
                </div>
            </div>

            <form className="row g-3 mt-1" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label className="form-label">
                        <div className="d-flex align-items-center" style={{ gap: '6px' }}>
                            <img src="./images/icons/icon-member.svg" alt="收件人" style={{ width: '20px', height: '20px' }} />
                            <span>收件人姓名</span>
                        </div>
                    </label>
                    <input
                        name="recipient"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="請輸入收件人姓名"
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">
                        <div className="d-flex align-items-center" style={{ gap: '6px' }}>
                            <img src="./images/icons/icon-phone.svg" alt="收件人" style={{ width: '20px', height: '20px' }} />
                            <span>聯絡電話</span>
                        </div>
                    </label>
                    <input
                        name="recipient"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="請輸入聯絡電話：0900-123-456"
                    />
                </div>
                <div className="col-12">
                    <label className="form-label">
                        <div className="d-flex align-items-center" style={{ gap: '6px' }}>
                        <img src="./images/icons/icon-shipping.svg" alt="送貨方式"style={{ width: '20px', height: '20px' }}  />
                        <span>送貨方式</span>
                        </div>
                    </label>
                    <select
                        name="shippingMethod"
                        className="form-select"
                        onChange={handleChange}
                        value={localForm.shippingMethod}
                    >
                        <option value="">請選擇送貨方式</option>
                        <option value="711">7-11 超商取貨</option>
                        <option value="home">宅配到府</option>
                    </select>
                </div>
                {localForm.shippingMethod === 'home' && (
                    <div className="col-12">
                        <label className="form-label d-flex align-items-center" style={{ gap: '2px' }}>
                            宅配地址
                        </label>
                        <input
                            name="address"
                            type="text"
                            className="form-control"
                            onChange={handleChange}
                            placeholder="請輸入完整宅配地址"
                        />
                    </div>
                )}
                <div className="col-md-6">

                      <label className="form-labe">
                        <div className="d-flex align-items-center" style={{ gap: '6px' }}>
                        <img src="./images/icons/icon-email.svg" alt="送貨方式"style={{ width: '20px', height: '20px' }}  />
                        <span>電子信箱</span>
                        </div>
                    </label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="example@mail.com"
                    />
                </div>
                {/* <div className="col-md-6">
                    <label className="form-label">會員姓名</label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        placeholder="會員姓名"
                    />
                </div> */}
                <div className="col-12">
                    <label className="form-label d-flex align-items-center" style={{ gap: '2px' }}>
                        <img src="./images/icons/icon-list.svg" alt="備註" style={{ width: '20px', height: '20px' }} />
                        備註</label>
                    <textarea
                        name="note"
                        className="form-control"
                        rows="2"
                        onChange={handleChange}
                        placeholder="備註（如特殊配送需求）"
                    ></textarea>
                </div>
                <div className="col-12 text-end">
                    <button type="submit" className="btn-brand">下一步：填寫付款資訊</button>
                </div>
            </form>
        </>
    );
}

export default ShippingForm;
