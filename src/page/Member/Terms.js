import React, { useEffect, useState } from "react";
import Button from "../../components/Form/Button";
import Icon from "../../components/Icon/Icon";
import Checkbox from "../../components/Form/Checkbox";
import { useNavigate } from "react-router-dom";

function Terms() {
    const navigate = useNavigate();
    const [checkboxes, setCheckboxes] = useState({
        all: false,
        service: false,
        privacy: false,
        thirdParty: false,
        age: false,
        marketing: false,
    });

    const handleChange = (event) => {
        const { id, checked } = event.target;
        if (id === "all") {
            setCheckboxes((prev) =>
                Object.keys(prev).reduce(
                    (acc, key) => ({ ...acc, [key]: checked }),
                    {}
                )
            );
        } else {
            setCheckboxes((prev) => ({ ...prev, [id]: checked }));
        }
    };
    const isAllChecked = Object.values(checkboxes).every((v) => v === true);
    const isRequiredChecked = ["service", "privacy", "thirdParty", "age"].every(
        (key) => checkboxes[key] === true
    );

    useEffect(() => {
        setCheckboxes((prev) => ({ ...prev, all: isAllChecked }));
    }, [isAllChecked]);

    const handleSubmit = () => {
        if (isRequiredChecked) {
            navigate("/member/register");
        }
    };
    return (
        <div className="memberContainer cntMarginTop cntMarginBottom">
            <div
                className="logoWrap cntMarginBottom"
                style={{ marginTop: "64px" }}
            >
                <h2>
                    별이 빛나는 밤, <br />
                    너와 나의 감성 캠핑
                </h2>
                <Icon iconName="logoDefault" />
            </div>
            <h3 className="wrapMarginBottom">가입약관을 읽고 동의해주세요.</h3>
            <div className="trimWrap cntMarginBottom">
                <Checkbox
                    id="all"
                    forName="all"
                    checked={isAllChecked}
                    onChange={handleChange}
                >
                    전체 동의
                </Checkbox>
                <hr />
                <Checkbox
                    id="service"
                    forName="service"
                    checked={checkboxes.service}
                    onChange={handleChange}
                >
                    서비스 이용약관 <span>(필수)</span>
                </Checkbox>
                <Checkbox
                    id="privacy"
                    forName="privacy"
                    checked={checkboxes.privacy}
                    onChange={handleChange}
                >
                    개인정보 수집 및 이용 동의 <span>(필수)</span>
                </Checkbox>
                <Checkbox
                    id="thirdParty"
                    forName="thirdParty"
                    checked={checkboxes.thirdParty}
                    onChange={handleChange}
                >
                    개인정보 제3자 제공 동의 <span>(필수)</span>
                </Checkbox>
                <Checkbox
                    id="age"
                    forName="age"
                    checked={checkboxes.age}
                    onChange={handleChange}
                >
                    만 14세 이상입니다. <span>(필수)</span>
                </Checkbox>
                <Checkbox
                    id="marketing"
                    forName="marketing"
                    checked={checkboxes.marketing}
                    onChange={handleChange}
                >
                    이벤트/마케팅 수신 동의 (선택)
                </Checkbox>
            </div>
            <Button
                defaultBtn={true}
                className="wrapMarginBottom"
                disabled={!isRequiredChecked}
                onClick={handleSubmit}
            >
                다음
            </Button>
        </div>
    );
}

export default Terms;
