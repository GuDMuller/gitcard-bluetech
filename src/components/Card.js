import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div className="c-card">
                <img className="c-card__avatar"
                    src={this.props.avatar_url}
                    alt="GitHub Profile"
                />

                <div className="c-card__info">
                    <h2 className="c-card__name">{this.props.name}</h2>
                    <p className="c-card__company">{this.props.company}</p>
                </div>
            </div>
        );
    }
}

export default Card;