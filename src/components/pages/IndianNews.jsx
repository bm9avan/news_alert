import React, { useState } from 'react'
import NewsItems from '../UI/NewsItems'
import '../UI/NewsItems.css'

const IndianNews = () => {
    const [pageNo, setPageno] = useState(1);
    return (
        <>
            <button onClick={() => { setPageno((p) => p + 1) }}>next</button>
            <NewsItems APIurl={`https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&page=${pageNo}&apiKey=1c5d1e9e5c164430bd375e6327bedee9`} />
        </>
    )
}

export default IndianNews
