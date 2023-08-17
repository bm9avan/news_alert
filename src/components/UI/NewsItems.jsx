import React, { useContext, useEffect, useReducer } from 'react'
import Item from './Item'
import { Description } from '../../store/desc-context'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import axios from 'axios';

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});
const formattedDate = formatter.format(date).split('/').reverse();
const formattedDateStart = formatter.format(date).split('/').reverse();
formattedDateStart[2] = parseInt(formattedDateStart[2]) - 2
const from=formattedDate.join("-")
const to=formattedDateStart.join("-")

function newsReduser(prevData, action) {
    if (action.type === "effect" && prevData.data !== null) {
        return { data: (prevData.data).concat(action.data), total: action.total, pageNo: prevData.pageNo }
    }
    //scroll will just increase page number by 1 this will run useEffect and add data in effect type
    else if (action.type === "scroll" && prevData.data !== null) {
        return { data: (prevData.data), total: prevData.total, pageNo: prevData.pageNo + 1 }
    } else {
        return { data: (action.data), total: action.total, pageNo: prevData.pageNo }
    }
}

const NewsItems = ({ q }) => {
    const ctx = useContext(Description)
    let { hideDesc } = ctx
    let [news, dispatchNews] = useReducer(newsReduser, {
        data: null,
        total: 0,
        pageNo: 0
    })
    // this component is reendering due to change in pageNo, prevent this using useMemo
    useEffect(() => {
        let url = `http://api.mediastack.com/v1/news?access_key=f0e2ffa0e012933a702de5a9e1aa23fd&keywords=${q}&date=${to},${from}&languages=en&offset=${25*news.pageNo}`

    //     fetch(url)
    //         .then((v) => v.json())
    //         .then((v) => {
    //             dispatchNews({ type: "effect", data: v.data, total: v.pagination.total })
    //         });
    // }, [q, news.pageNo])
        axios.get(url)
            .then((v) => v.data)
            .then((v) => {
                dispatchNews({ type: "effect", data: v.data, total: v.pagination.total })
            });
    }, [q, news.pageNo])

    let fetchMoreData = async () => {
        dispatchNews({ type: "scroll" })
    }

    return (
        <InfiniteScroll
            dataLength={news.data && news.data.length}
            next={fetchMoreData}
            hasMore={news.data ? (news.data.length < news.total) : true}
            loader={<Spinner />}
        >
            <div className="out">
                <div className="grid">
                    {news.data && news.data.map((each) => {
                        return (
                            < Item
                                key={Math.random().toString()}
                                classAdder={hideDesc ? 'show' : 'hide'}
                                title={each.title || 'Title not provided'}
                                description={each.description || 'Description not provided'}
                                srcNews={each.url}
                                srcImg={each.image || 'https://as1.ftcdn.net/v2/jpg/03/27/55/60/1000_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg'}
                            />
                        )
                    })}
                </div>
            </div>
        </InfiniteScroll>
    )
}

export default NewsItems