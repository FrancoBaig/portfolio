import React, { useEffect } from "react";

function UserCard({ userData }) {
    const user = userData[0];
    useEffect(() => {}, []);

    return (
        <div className="user-card paper">
            <a className="user-card__thumbnail" href={user.github}>
                <img
                    className="user-card__image"
                    src={user.image}
                    alt={user.name}
                />
            </a>
            <div className="user_card__content">
                <div className="user-card__titles">
                    <h3 className="user-card__name">{user.name}</h3>
                    <h5 className="user-card__job">{user.job}</h5>
                </div>
                <p className="user-card__description">{user.description}</p>
            </div>
        </div>
    );
}

export default UserCard;
