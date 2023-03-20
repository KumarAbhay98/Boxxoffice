import React , {useState} from "react";
const MenuCard = ({ menuData }) => {

  //vote
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curElem) => {
          const { id, name, category, image, description, watch } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="cardd ">
                  <div className="card-body">
                    <span className="card-number card-rectangle subtle">Id: {id}</span>
                    <span className="card-author"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description">
                      {description}
                    </span>
                    <div className="animate-border"></div>
                  </div>
                  <img src={image} alt="images" className="card-media" width="100%" height="200px" />
                  <a target="_blank" className="card-tag" href={watch}>Watch Now</a>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;