import React, { useState, useEffect, useContext } from 'react'
import Item from './Item'
import { Description } from '../../store/desc-context'

const NewsItems = ({ APIurl }) => {
    const ctx = useContext(Description)
    let { hideDesc } = ctx
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(APIurl)
            .then((v) => v.json())
            .then((v) => {
                setData(v.articles)
            });
    }, [APIurl]);

    return (
        <div className="out">
            <div className="grid">
                {data && data.map((each) => {
                    return (
                        < Item
                            key={each.url}

                            classAdder={hideDesc ? 'show' : 'hide'}

                            title={each.title}
                            description={each.description}
                            srcNews={each.url}
                            srcImg={each.urlToImage}
                        />
                    )
                })}
            </div>
            {data && data.length ===0 ? 'empty': ''}
        </div>
    )
}

export default NewsItems