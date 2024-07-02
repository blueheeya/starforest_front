import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ menu, setTitleIndex }) {
    const localMenu = [
        {
            name: "홈",
            link: "/",
            icon: "menuHome",
            active: "menuHomeActive",
        },
        {
            name: "별숲 기록",
            link: "/diary/list",
            icon: "menuLog",
            active: "menuLogActive",
        },
        {
            name: "별숲 스토어",
            link: "/store/list",
            icon: "menuStore",
            active: "menuStoreActive",
        },
        {
            name: "마이페이지",
            link: "/user/mypage",
            icon: "menuUser",
            active: "menuUserActive",
        },
    ];
    return (
        <nav className="menuWrap">
            {localMenu.map((menu, index) => {
                return (
                    <NavLink key={index} to={menu.link}>
                        {({ isActive }) => (
                            <ul>
                                <li
                                    className={
                                        isActive
                                            ? `icon ${menu.active}`
                                            : `icon ${menu.icon}`
                                    }
                                >
                                    {menu.icon}
                                </li>
                                <li>{menu.name}</li>
                            </ul>
                        )}
                    </NavLink>
                );
            })}
        </nav>
    );
}

export default Menu;
