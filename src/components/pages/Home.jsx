import React from 'react'
import NewsItems from '../UI/NewsItems'
import '../UI/NewsItems.css'

const Home = () => {

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
        <NewsItems type='everything' q='ai' from={formattedDate} to={formattedDateStart} />
    )
}

export default Home