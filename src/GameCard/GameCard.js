/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Card({ card, onCardClick }) {
	const { isHappy, src } = card;
	const [isHidden, setIsHidden] = useState(false);

	const onClickHandler = () => {
		if (isHappy === true) {
			onCardClick();
			return;
		}
		setIsHidden(true);
	};
	return (
		<img
			src={`${process.env.PUBLIC_URL}${src}`}
			onClick={onClickHandler}
			aria-label="Card"
			className={`card${isHidden ? ' card--hidden' : ''}`}
		/>
	);
}

Card.defaultProps = {
	card: {},
	onCardClick: () => { },
};

Card.propTypes = {
	onCardClick: PropTypes.func,
	// eslint-disable-next-line react/forbid-prop-types
	card: PropTypes.object,
};

export default Card;
