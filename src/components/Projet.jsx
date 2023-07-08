import React from "react";
import styled from "styled-components";

import logo from "../assets/git.png";

import { HiArrowNarrowRight } from "react-icons/hi";
import { cardStyles } from "./StyleCommun";

export default function Transfers() {
	const transactions = [
		{
		image: logo,
		name: "DashBoard",
		time: "04/07/23",
		amount: "+ 1"
		},

		{
		image: logo,
		name: "RC",
		time: "29/07/23",
		amount: "+ 1"
		},

		{
		image: logo,
		name: "Portfolio KLS",
		time: "27/07/23",
		amount: "+ 1"
		}
	];

	return (
		<Section>
		<div className="title">
			<h2>Derniers projets</h2>
		</div>
		<div className="transactions">
			{transactions.map((transaction) => {
			return (
				<div className="transaction">
				<div className="transaction__title">
					<div className="transaction__title__image">
					<img src={transaction.image} alt="" />
					</div>
					<div className="transaction__title__details">
					<h3>{transaction.name}</h3>
					<h5>{transaction.time}</h5>
					</div>
				</div>
				<div className="transaction__amount">
					<span>{transaction.amount}</span>
				</div>
				</div>
			);
			})}
		</div>
		<a className="view" href="#">
			Voir tous mes projets <HiArrowNarrowRight />
		</a>
		</Section>
	);
}

const Section = styled.section`
	${cardStyles};
		display: flex;
		flex-direction: column;
		gap: 1rem;
		.title {
			h2 {
			color: #ffc107;
			font-family: "Permanent Marker", cursive;
			letter-spacing: 0.3rem;
			}
		}

		.transactions {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin-top: 1rem;
			.transaction {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			&__title {
				display: flex;
				gap: 1rem;
				&__image {
					img {
						height: 2.5rem;
						border-radius: 3rem;
					}
				}
				&__details {
				}
			}
			&__amount {
				background-color: #d7e41e1d;
				padding: 0.2rem 0.5rem;
				width: 4rem;
				border-radius: 1rem;
				text-align: center;
				transition: 0.3s ease-in-out;
				&:hover {
					background-color: #ffc107;
					span {
						color: black;
					}
				}
				span {
					color: #ffc107;
				}
			}
		}
	}

	.view {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		text-decoration: none;
		color: #ffc107;
		font-weight: bold;
		margin-top: 1rem;
		gap: 0.5rem;
		svg {
			transition: 0.3s ease-in-out;
			font-size: 1.4rem;
		}
		&:hover {
			svg {
				transform: translateX(0.5rem);
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 375px) {
		.transactions {
		.transaction {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
		}
	}
`;