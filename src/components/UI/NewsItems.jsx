import React, { useState, useEffect } from 'react'
import Item from './Item'

const NewsItems = ({ hideDesc, APIurl }) => {
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
        </div>
    )
}

export default NewsItems