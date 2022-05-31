import React from "react";

function Hobbies() {
    return (
        <div className="hobbies paper">
            <h2 className="hobbies__title">Hobbies</h2>
            <div className="hobbies__container">
                <div className="hobbies__item">
                    <img
                        className="hobbie__image"
                        src="https://via.placeholder.com/370x140.png"
                        alt="hobbie_image"
                    />
                    <h4 className="hobbie__title">Gaming</h4>
                    <p className="hobbie__description">
                        Quisque feugiat malesuada molestie.
                    </p>
                </div>

                <div className="hobbies__item">
                    <img
                        className="hobbie__image"
                        src="https://via.placeholder.com/370x140.png"
                        alt="hobbie_image"
                    />
                    <h4 className="hobbie__title">Gaming</h4>
                    <p className="hobbie__description">
                        Quisque feugiat malesuada molestie.
                    </p>
                </div>
                <div className="hobbies__item">
                    <img
                        className="hobbie__image"
                        src="https://via.placeholder.com/370x140.png"
                        alt="hobbie_image"
                    />
                    <h4 className="hobbie__title">Gaming</h4>
                    <p className="hobbie__description">
                        Quisque feugiat malesuada molestie.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;
