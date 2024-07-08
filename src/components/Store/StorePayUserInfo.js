import React from 'react'

function StorePayUserInfo() {
    return (
        <div className='storePayUserInfo'>
            <div className='storePayUserInfoInner'>
                <div className='innerTitle'>배송지 정보</div>
                <div className='innerContent'>
                    <div className='innerBox'>
                        <div className='boxName'>수령인</div>
                        <input className='boxInput' type="text" placeholder="성함을 입력해 주세요." />
                    </div>
                    <div className='innerBox'>
                        <div className='boxName'>연락처</div>
                        <input className='boxInput' type="text" placeholder="연락처를 입력해 주세요." />
                    </div>
                    <div className='innerBox'>
                        <div className='boxName'>주소</div>
                        <input className='boxInput' type="text" placeholder="주소를 입력해 주세요." />
                    </div>
                    <div className='innerBox'>
                        <div className='boxName'>상세주소</div>
                        <input className='boxInput' type="text" placeholder="상세주소를 입력해 주세요" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorePayUserInfo