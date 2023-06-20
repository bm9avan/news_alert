import React, { useContext, useEffect, useReducer } from 'react'
import Item from './Item'
import { Description } from '../../store/desc-context'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

function newsReduser(prevData, action) {
    if (action.type === "effect" && prevData.data !== null) {
        return { data: (prevData.data).concat(action.data), total: action.total, pageNo: prevData.pageNo }
    }
    else if (action.type === "scroll" && prevData.data !== null) {
        return { data: (prevData.data), total: prevData.total, pageNo: prevData.pageNo + 1 }
    } else {
        return { data: (action.data), total: action.total, pageNo: prevData.pageNo }
    }
}

const NewsItems = ({ type, q, from, to }) => {
    const ctx = useContext(Description)
    let { hideDesc } = ctx
    let [news, dispatchNews] = useReducer(newsReduser, {
        data: null,
        total: 0,
        pageNo: 1
    })

    // this component is reendering due to change in pageNo, prevent this using useMemo
    useEffect(() => {
        let url = `https://newsapi.org/v2/${type}?q=${q}&from=${from}&to=${to}&excludeDomains=readwrite.com,news.slashdot.org,slashdot.org,techdirt.com,reuters.com,ycombinator.com&pageSize=30&language=en&apiKey=1c5d1e9e5c164430bd375e6327bedee9&page=${news.pageNo}`
        fetch(url)
            .then((v) => v.json())
            .then((v) => {
                dispatchNews({ type: "effect", data: v.articles, total: v.totalResults })
            });
    }, [type, q, from, to, news.pageNo])

    let fetchMoreData = async () => {
        dispatchNews({ type: "scroll" })
    }

    return (
        <InfiniteScroll
            dataLength={news.data && news.data.length}
            next={fetchMoreData}
            hasMore={news.data ? (news.data.length !== news.total) : true}
            loader={<Spinner />}
        >
            <div className="out">
                <div className="grid">
                    {news.data && news.data.map((each) => {
                        return (
                            < Item
                                key={each.url}
                                classAdder={hideDesc ? 'show' : 'hide'}
                                title={each.title || 'Title not provided'}
                                description={each.description || 'Description not provided'}
                                srcNews={each.url}
                                srcImg={each.urlToImage || 'https://as1.ftcdn.net/v2/jpg/03/27/55/60/1000_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg'}
                            />
                        )
                    })}
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default NewsItems