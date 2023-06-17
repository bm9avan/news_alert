import React, { useContext } from 'react'
import NewsItems from '../UI/NewsItems'
import '../UI/NewsItems.css'
import { Description } from '../../store/desc-context'

const IndianNews = () => {
    const ctx = useContext(Description)
    let { hideDesc } = ctx
    return (
        <>
            <NewsItems hideDesc={hideDesc} APIurl={`https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5d1e9e5c164430bd375e6327bedee9`} />
        </>
    )
}

export default IndianNews
