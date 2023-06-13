import React from 'react'
import NavBar from './components/NavBar'
import Item from './components/UI/Item'

const App = () => {
  // fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=1c5d1e9e5c164430bd375e6327bedee9').then((v)=>console.log(v))
  return (
    <>
      <NavBar />
      <div className="out">
        <div className="grid">
          {[0, 1, 2,3,4,5,6].map((each) => {
            return (
              < Item
                key={each}
                title="15in MacBook Air review: Apple’s best consumer laptop, just bigger"
                description="Thin and light M2 Mac has fast performance, a very long battery life and one of the best screens on the marketApple’s much-rumoured 15in MacBook Air is here, marking the firm’s return to this part of the market and adding more screen to what is arguably the b…"
                srcNews='https://www.theguardian.com/technology/2023/jun/12/15in-macbook-air-review-apples-best-consumer-laptop-just-bigger'
                srcImg="https://i.guim.co.uk/img/media/1bc6823cf1bf0bcc29047876e666cdfc76c16df5/0_619_4937_2962/master/4937.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTUucG5n&enable=upscale&s=393a813df83a0883d195b6a1ebdb21ca"
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
