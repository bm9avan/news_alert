import React, { useContext, useEffect, useReducer } from 'react'
import Item from './Item'
import { Description } from '../../store/desc-context'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

function newsReduser(prevData, action) {
    // console.log(prevData)
    if (action.type === "first") {
        console.log("reduser 1 one first", prevData.pageNo)
        return { data: action.data, total: action.total, pageNo: prevData.pageNo + 1 }
    }
    else if (action.type === "scroll") {
        console.log("in news reduser 2", prevData.data, "prev", action.data, action.type)
        return { data: (prevData.data).concat(action.data), total: action.total, pageNo: prevData.pageNo + 1 }
    } else {
        console.log("else reduser 3 ", action.type)
        return { data: (action.data), total: action.total, pageNo: prevData.pageNo + 1 }
    }
}

const NewsItems = ({ type, from, to }) => {
    const ctx = useContext(Description)
    let { hideDesc } = ctx
    // const [data, setData] = useState(null);
    // const [total, setTotal] = useState(0);
    // const [pageNo, setPageno] = useState(1);
    let [news, dispatchNews] = useReducer(newsReduser, {
        data: null,
        total: 0,
        pageNo: 1
    })

    
    let url = `https://newsapi.org/v2/${type}?q=ai&from=${from}&to=${to}&excludeDomains=readwrite.com,news.slashdot.org,slashdot.org,techdirt.com,reuters.com&pageSize=30&language=en&apiKey=764acf1cc62041bbaa28e93e0422fedb&page=${news.pageNo}`
    useEffect(() => {
        fetch(url)
            .then((v) => v.json())
            .then((v) => {
                console.log("in effect", v)
                // setTotal(v.totalResults)
                // setData(v.articles)
                dispatchNews({ type: "first", data: v.articles, total: v.totalResults })
            });
        // setPageno((p) => p + 1)
    }, [])

    let fetchMoreData = async () => {
        fetch(url)
            .then((v) => v.json())
            .then((v) => {
                console.log("in fetch", v)
                // setTotal(v.totalResults)
                // setData((prev) => {
                //     prev.concat(v.articles)
                // })
                dispatchNews({ type: "scroll", data: v.articles })
            });
        // setPageno((p) => p + 1)
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
                    {console.log(news.data)}
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