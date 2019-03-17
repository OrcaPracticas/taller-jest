import React from "react";
import PropTypes from "prop-types";
import { Action, Caption, Thumbnail } from ".";

const Card = (props) => {
    const {
        image, title, text,
        description, link,
    } = props;

    return (
        <div className="col s6 m6">
            <div className="card">
                <Thumbnail image={`${image}`} />
                <Caption description={description} title={title} />
                <Action text={text} link={link} />
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string,
};

Card.defaultProps = {
    image: "http://via.placeholder.com/306x229/c0c0c0/000000/?text=placeholder",
    title: "Title",
    description: "Demo Infinite Scroll",
    link: "/",
    text: "View More",
};

export default Card;
