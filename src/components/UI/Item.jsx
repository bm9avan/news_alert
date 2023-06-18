import React from 'react'
import './Item.css'

const item = ({ classAdder, title, description, srcNews, srcImg }) => {
    return (
        <div className="grid__item" >
            <div className="card"><img className="card__img" src={srcImg} alt='NewsImage' />
                <div className="card__content">
                    <h2 className="card__header">{title} </h2>
                    <p className={`card__text ${classAdder}Desc `}>{description} </p>
                    <a href={srcNews} target='_blank' rel="noopener noreferrer"><button className="card__btn">Read Full Artical <span>&rarr;</span>
                    </button></a>
                </div>
            </div>
        </div>

    )
}

export default item
