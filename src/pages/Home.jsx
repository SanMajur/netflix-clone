import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='upcoming' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title='popular' fetchURL={requests.requestPopular}/>
        <Row rowID='3' title='top rated' fetchURL={requests.requestTopRated}/>
        <Row rowID='4' title='trending' fetchURL={requests.requestTrending}/>
        <Row rowID='5' title='horror' fetchURL={requests.requestHorror}/>
    </>
  )
}

export default Home