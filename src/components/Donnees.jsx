import React from "react";
import styled from "styled-components";

import { BiGitRepoForked } from "react-icons/bi";
import { IoStatsChart } from "react-icons/io5";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { cardStyles } from "./StyleCommun";
import { AiOutlineCode } from "react-icons/ai";

export default function Analytics() {
	return (
		<Section>
		<div className="analytic ">
			<div className="content">
				<h5>Repository</h5>
				<h2>24</h2>
			</div>
			<div className="logo">
				<BiGitRepoForked />
			</div>
		</div>

		<div className="analytic">
			<div className="logo">
				<IoStatsChart />
			</div>
			<div className="content">
				<h5>Commits</h5>
				<h2>790</h2>
			</div>
		</div>

		<div className="analytic">
			<div className="logo">
				<AiOutlineCode />
			</div>
			<div className="content">
				<h5>Langages utilisés</h5>
				<h2>6</h2>
			</div>
		</div>

		<div className="analytic ">
			<div className="content">
				<h5>Ouverture compte</h5>
				<h2>2021</h2>
			</div>
			<div className="logo">
				<BsBoxArrowUpRight />
			</div>
		</div>
		</Section>
	);
}

const Section = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	.analytic {
		${cardStyles};
			padding: 1rem;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 1rem;
			transition: 0.5s ease-in-out;
			&:hover {
				background-color: #ffc107;
				color: black;

				svg {
					color: white;
				}
			}

			.logo {
				background-color: black;
				border-radius: 3rem;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 1.5rem;

				svg {
					font-size: 1.5rem;
				}
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 720px) {
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		.analytic {
			&:nth-of-type(3),
			&:nth-of-type(4) {
				flex-direction: row-reverse;
			}
		}
	}
`;
