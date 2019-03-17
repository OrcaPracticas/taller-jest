import React from "react";
import PropTypes from "prop-types";
import { Card } from ".";

const Master = (props) => {
    const { number, title } = props;
    const RENDER = [];

    for (let i = 0; i <= number; i += 1) {
        const COLOR = Math.floor(Math.random() * 16777215).toString(16);
        const IMG = `http://via.placeholder.com/306x229/${COLOR}/FFFFFF/?text=Card ${i}`;
        RENDER.push(<Card title={`Card ${i}`} image={IMG} key={`card-${i}`} />);
    }

    return (
        <React.Fragment>
            <h1 className="title-demo">{title}</h1>
            {RENDER}
        </React.Fragment>
    );
};

Master.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default Master;
