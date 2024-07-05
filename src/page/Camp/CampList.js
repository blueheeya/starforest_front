import React from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import CampListCard from "../../components/Camp/CampListCard";

function CampList() {
    return (
        <>
            <div>
                <div>전체 :100개</div>
                <CampListCard />
                <CampListCard />
                <CampListCard />
            </div>
        </>
    );
}

export default CampList;
