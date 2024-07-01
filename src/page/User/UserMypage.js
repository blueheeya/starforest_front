import React from 'react'
import ContentWrap from '../../components/Layout/ContentWrap'
import { HeaderType } from '../../components/Layout/Header'

function UserMypage() {
  return (
    <>
        <HeaderType children={"내 정보"}/>
        <ContentWrap>
            별숲기록
        </ContentWrap>
    </>
  )
}

export default UserMypage