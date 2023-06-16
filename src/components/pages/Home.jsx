import React from 'react'
import NewsItems from '../UI/NewsItems'
import '../UI/NewsItems.css'

const Home = ({ hideDesc }) => {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const formattedDate = formatter.format(date).split('/').reverse();
    const formattedDateStart = formatter.format(date).split('/').reverse();
    formattedDateStart[2] = parseInt(formattedDateStart[2]) - 2
    return (
        <>
            <NewsItems hideDesc={hideDesc} APIurl={`https://newsapi.org/v2/everything?q=ai&from=${formattedDateStart.join('-')}&to=${formattedDate.join('-')}&excludeDomains
=readwrite.com,news.slashdot.org,slashdot.org,reuters.com&pageSize=60&apiKey=1c5d1e9e5c164430bd375e6327bedee9`} />
        </>
    )
}

export default Home