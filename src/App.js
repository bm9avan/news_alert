import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Item from './components/UI/Item'

const App = () => {
  const [data, setData] = useState(null);
  const [hideDesc, setHideDesc] = useState(false)

  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c5d1e9e5c164430bd375e6327bedee9")
      .then((v) => v.json())
      .then((v) => {
        setData(v.articles)
      });
  }, []);

  function descHandler(boolData) {
    setHideDesc(boolData)
  }
  return (
    <>
      <NavBar hideDesc={hideDesc} descHandler={descHandler} />
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
    </>
  )
}

export default App
