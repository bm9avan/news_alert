import React from 'react'
import NewsItems from '../UI/NewsItems'
import '../UI/NewsItems.css'

const IndianNews = () => {
    return (
        <>
            <NewsItems APIurl={`https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5d1e9e5c164430bd375e6327bedee9`} />
        </>
    )
}

export default IndianNews
