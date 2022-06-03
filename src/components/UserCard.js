import React from "react";

function UserCard() {
    return (
        <div className="user-card paper">
            <a
                className="user-card__thumbnail"
                href="https://github.com/FrancoBaig"
            >
                <img
                    className="user-card__image"
                    src="https://via.placeholder.com/365x365.png"
                    alt="user"
                />
            </a>
            <div className="user_card__content">
                <div className="user-card__titles">
                    <h3 className="user-card__name">Franco Baigorria</h3>
                    <h5 className="user-card__job">Front-end developer</h5>
                </div>
                {/* <div className="user-card__contacts">
                    <div className="contact">
                        <i className="contact__icon fa-solid fa-envelope"></i>
                        <p className="contact__text">
                            baigorriafrancoadg@gmail.com
                        </p>
                    </div>
                    <div className="contact">
                        <i className="contact__icon fa-solid fa-phone"></i>
                        <p className="contact__text">(+603) 546 624 342</p>
                    </div>
                </div> */}
                <p className="user-card__description">
                    Self-motivated developer, who is willing to learn and create
                    outstanding UI applications.
                </p>
            </div>
        </div>
    );
}

export default UserCard;
