/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { useRef, useState } from 'react';
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

const renderHappyCard = (previousCardRef) => {
	const happyCards = cardData.happyCards;

	if (!previousCardRef) {
		const happyCardObj = happyCards[Math.floor(Math.random() * happyCards.length)]
		previousCardRef.current = happyCardObj.id;
		return happyCardObj;
	}
	const filteredCards = happyCards.filter(card => { return card.id !== previousCardRef.current })
	const happyUniqueCard = filteredCards[Math.floor(Math.random() * filteredCards.length)];
	previousCardRef.current = happyUniqueCard.id;
	return happyUniqueCard;
}

function Board() {
	const [rounds, setRounds] = useState(0);
	const previousCardRef = useRef(null)
	const cards = getRandom(cardData.otherCards, 8);
	const happyCard = renderHappyCard(previousCardRef);

	// add happy card at random place in cards[]
	cards.splice(Math.floor(Math.random() * cards.length), 0, happyCard);

	const onCardClick = () => {
		setRounds(rounds + 1);
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
