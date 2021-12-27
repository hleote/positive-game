import React, { useState } from 'react';

import { Card as CardType } from '../GameBoard/GameBoard';

import './style.css';

type CardParams = {
	card: CardType,
	onCardClick: Function
}

const Card: React.FunctionComponent<CardParams> = ({ card, onCardClick }: CardParams) => {
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

export default Card;
