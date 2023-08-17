import React from "react";
import "./Item.css";

const item = ({ classAdder, title, description, srcNews, srcImg }) => {
  return (
    <div className="grid__item">
      <div className="card">
        <img
          className="card__img"
          src={srcImg}
          alt="NewsImage"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://as1.ftcdn.net/v2/jpg/03/27/55/60/1000_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg";
          }}
        />
        <div className="card__content">
          <h2 className="card__header">{title} </h2>
          <p className={`card__text ${classAdder}Desc `}>
            {description.slice(0, 400)} ...{" "}
          </p>
          <a href={srcNews} target="_blank" rel="noopener noreferrer">
            <button className="card__btn">
              Read Full Artical <span>&rarr;</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default item;
