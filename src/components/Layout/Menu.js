import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu({menu, setTitleIndex}) {
    const localMenu = [
        {
            name:'홈',
            link:'/',
            active:'active',
        },
        {
            name:'별숲 기록',
            link:'/diary/list',
            active:'active',
        },
        {
            name:'별숲 스토어',
            link:'/store/list',
            active:'active',
        },
        {
            name:'내 정보',
            link:'/user/mypage',
            active:'active',
        },
    ]
  return (
    <nav className='menuWrap'>
        {localMenu.map((menu,index)=>{
            return (
                <NavLink to={menu.link}>
                <ul key={index} className=''>
                    <li>이미지</li>
                    <li>{menu.name}</li>
                </ul>
                </NavLink>
            )
        })}
    </nav>
  )
}

export default Menu