import React from "react";

function Hobbies({ hobbies }) {
    return (
        <div className="hobbies paper">
            <h2 className="hobbies__title">Hobbies</h2>
            <div className="hobbies__container">
                {hobbies.map((el) => (
                    <div className="hobbies__item" key={el.id}>
                        <img
                            className="hobbie__image"
                            src={el.image}
                            alt="hobbie_image"
                        />
                        <div className="hobbie__text">
                            <h4 className="hobbie__title">{el.title}</h4>
                            <p className="hobbie__description">
                                {el.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hobbies;
