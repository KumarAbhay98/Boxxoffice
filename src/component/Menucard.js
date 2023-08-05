import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <section className="main-card--container">
      {menuData.map((curElem) => {
        const { id, name, category, image, description, watch } = curElem;
        return (
          <React.Fragment key={id}>
            <div className="cardd">
              <div className="card-body">
                <span className="card-number card-rectangle subtle">Id: {id}</span>
                <span className="card-author"> {category}</span>
                <h2 className="card-title"> {name} </h2>
                <span className="card-description">{description}</span>
                <div className="animate-border"></div>
              </div>
              <img src={image} alt="images" className="card-media" style={{
                Objectfit:'cover'}}/>
              <a target="_blank" rel="noreferrer" className="card-tag" href={watch}>
                Watch Now
              </a>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};
export default MenuCard;
