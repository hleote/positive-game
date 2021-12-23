/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import cardData from '../data/cards-data.json';
import './style.css';

function getRandom(arr, n) {
	const result = new Array(n);
	let len = arr.length;
	const taken = new Array(len);
	if (n > len) {
		throw new RangeError('getRandom: more elements taken than available');
	}

	// TODO fix without eslint-disable exception
	while (n--) {
		const x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}

	return result;
}

const Board = () => {
	const initialHappyCard = cardData.happyCards[0];
	const [rounds, setRounds] = useState(0);
	const [happyCard, setHappyCard] = useState(initialHappyCard);

	useEffect(() => {
		renderHappyCard();
	}, [])

	const renderHappyCard = () => {
		const happyCards = cardData.happyCards;

		setHappyCard(prevState => {
			const previousCard = prevState;
			const filteredCards = happyCards.filter(card => { return card.id !== previousCard.id });
			const happyUniqueCard = filteredCards[Math.floor(Math.random() * filteredCards.length)];
			return happyUniqueCard;
		})
	}

	const cards = getRandom(cardData.otherCards, 8);
	cards.splice(Math.floor(Math.random() * cards.length), 0, happyCard);

	const onCardClick = () => {
		setRounds(rounds + 1);
		renderHappyCard();
	};

	return (
		<>
			<h3>Positive game - find the happy face</h3>
			<h4>{`${rounds} of ∞`}</h4>
			<section className="board">
				<>
					{cards.map((card) => {
						return (
							<Card
								key={`${card.id}_${rounds}`}
								card={card}
								onCardClick={onCardClick}
							/>
						);
					})}
				</>
			</section>
		</>
	);
}

export default Board;
