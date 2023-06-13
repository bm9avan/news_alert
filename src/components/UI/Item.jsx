import React, { useState } from 'react'
import './Item.css'

const item = ({ title, description, srcNews, srcImg }) => {
    const [showDisc, setShowDisc] = useState(false)
    return (
        <div className="grid__item" onMouseEnter={() => { setShowDisc((prev) => !prev) }} onMouseLeave={() => { setShowDisc((prev) => !prev) }}>
            <div className="card"><img className="card__img" src={srcImg} alt='NewsImage' />
                <div className="card__content">
                    <h2 className="card__header">{title} </h2>
                    {showDisc && <p className="card__text">{description} </p>}
                    <a href={srcNews}><button className="card__btn">
                        Read Full Artical <span>&rarr;</span>
                    </button></a>
                </div>
            </div>
        </div>

    )
}

export default item
