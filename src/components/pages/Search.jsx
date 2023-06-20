import React from 'react'
import NewsItems from '../UI/NewsItems'
import '../UI/NewsItems.css'
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    console.log();
    return (
        <NewsItems type='everything' q={searchParams.get('q')}/>
    )
}

export default Search
