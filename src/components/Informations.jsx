import React from "react";
import styled from "styled-components";

import { IoIosArrowForward } from "react-icons/io";
import { AiFillQuestionCircle } from "react-icons/ai";
import { RiGithubFill } from "react-icons/ri";
import { cardStyles } from "./StyleCommun";

export default function FAQ() {
	const faqs = [
		{
		icon: <AiFillQuestionCircle />,
		text: "Qui-suis je ?",
		link: "https://iklsi.github.io/Portfolio_KLS/"
		},

		{
		icon: <RiGithubFill />,
		text: "Mon Github",
		link: "https://github.com/IKLSI"
		}
	];

	return (
		<Section>
		<div className="title">
			<h2>Informations</h2>
		</div>
		<div className="faqs">
			{faqs.map((faq) => (
			<a href={faq.link} className="faq" key={faq.text}>
				<div className="info">
					{faq.icon}
					<h4>{faq.text}</h4>
				</div>
				<IoIosArrowForward />
			</a>
			))}
		</div>
		</Section>
	);
}

const Section = styled.section`
	${cardStyles};
	.title {
		h2 {
		color: #ffc107;
		font-family: "Permanent Marker", cursive;
		letter-spacing: 0.3rem;
		}
	}
	.faqs {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-top: 1rem;
		.faq {
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
			.info {
				display: flex;
				gap: 1rem;
				align-items: center;
			}
			svg {
				font-size: 1.4rem;
			}
			&:nth-of-type(2) {
				border-top: 0.01rem solid #6c6e6e;
				border-bottom: 0.01rem solid #6c6e6e;
				padding: 0.8rem 0;
			}
		}
		a {
			text-decoration: none;
			color: inherit;
		}
		a:hover {
			color: #ffc107;
		}
	}
	@media screen and (min-width: 280px) and (max-width: 1080px) {
		svg {
		font-size: 2rem !important;
		}
	}
`;
