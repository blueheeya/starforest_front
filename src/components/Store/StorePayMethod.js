import React from 'react'

function StorePayMethod() {
    return (
        <div className='storePayMethod'>
            <div className='storePayMethodInner'>
                <div className='innerTitle'>예상 결제 금액</div>
                <div className='innerContent1'>
                    <div className='contentAll'>
                        <div className='priceName'>총 상품 금액</div>
                        <div className='priceDetail'>10,000원</div>
                    </div>
                    <div className='contentAll'>
                        <div className='dName'>배송비</div>
                        <div className='dFree'>무료</div>
                    </div>
                    <div className='contentAll'>
                        <div className='levelName'>등급 할인</div>
                        <div className='levelPrive'>10,000원</div>
                    </div>
                </div>
                <div className='innerContent2'>
                    <div className='content2Name'>총 주문 금액</div>
                    <div className='content2Detail'>
                        <div className='content2Dis'>10,000원</div>
                        <div className='content2Price'>10,000원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorePayMethod