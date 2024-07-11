import React from "react";
import Toggle from "../../components/Form/Toggle";

function Notice() {
    const noticeDate = [
        {
            title: "[공지] 불법 프로그램 사용 관련 안내",
            date: "2024.07.11",
            content:
                "안녕하세요 별숲입니다.<br><br>캠핑 성수기 시즌이 시작되면서,<br>불법적인 프로그램을 사용하여 캠핑장 예약을 시도하는 악용 사례가 확인되고 있습니다. <br><br>이는 별숲 서비스를 정상적으로 이용하는 캠퍼 및 캠핑장에게 피해를 주는 내용이며,<br>서비스 이용약관 *제 13조 14항 이용자의 의무를 위배하는 행위로 판단됩니다.<br><br>관련하여 회사는 공정한 캠핑 예약서비스 환경을 제공하기 위해 비정상적인 프로그램을 통한 예약 건에 대해 실시간 점검을 상시적으로 진행하고 있습니다.<br><br>더불어, 필요시 서비스 이용약관 *제 12조에 의거하여 해당 예약 건에 대한 서비스 이용 제한 및 예약 건 철회 조치, 회원 자격 제한 등 단계별 조치가 진행될 수 있음을 안내드립니다.",
        },
    ];
    return (
        <>
            {noticeDate.map((noticeDate, index) => {
                return (
                    <Toggle
                        key={index}
                        title={noticeDate.title}
                        date={noticeDate.date}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: noticeDate.content,
                            }}
                        ></div>
                    </Toggle>
                );
            })}
        </>
    );
}

export default Notice;
