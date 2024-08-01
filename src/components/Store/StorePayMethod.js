import React from 'react'

function StorePayMethod({ productInfo, quantity }) {
    const payPrice = productInfo?.price * quantity
    const orignPrice = (Math.floor(productInfo?.price / 0.7 / 1000) * 1000) * quantity
    const discount = orignPrice - payPrice
    return (
        <div className='storePayMethod'>
            <div className='storePayMethodInner'>
                <div className='innerTitle'>예상 결제 금액</div>
                <div className='innerContent1'>
                    <div className='contentAll'>
                        <div className='priceName'>총 상품 금액</div>
                        <div className='priceDetail'>{orignPrice.toLocaleString()}원</div>
                    </div>
                    <div className='contentAll'>
                        <div className='dName'>배송비</div>
                        <div className='dFree'>무료</div>
                    </div>
                    <div className='contentAll'>
                        <div className='levelName'>등급 할인</div>
                        <div className='levelPrive'>{discount.toLocaleString()}원</div>
                    </div>
                </div>
                <div className='innerContent2'>
                    <div className='content2Name'>총 주문 금액</div>
                    <div className='content2Detail'>
                        <div className='content2Price'>{payPrice.toLocaleString()}원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorePayMethod