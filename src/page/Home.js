import React from 'react'
import ContentWrap from '../components/Layout/ContentWrap'
import { HeaderType1 } from '../components/Layout/Header'
import EventSwiper from '../components/Store/EventSwiper'

function Home() {
  return (
    <div>
        <HeaderType1 />
        <ContentWrap>
            <EventSwiper />
        </ContentWrap>
        
    </div>
  )
}

export default Home