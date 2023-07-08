import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { cardStyles } from "./StyleCommun";

const data = [
	{ commits: 0 },
	{ commits: 0 },
	{ commits: 0 },
	{ commits: 0 },
	{ commits: 0 },
	{ commits: 227 },
	{ commits: 88 },
	{ commits: 70 },
	{ commits: 121 },
	{ commits: 87 },
	{ commits: 8 },
	{ commits: 1 }
];

export default function Earnings() {
	return (
		<Section>
		<div className="top">
			<div className="info">
			<h1>Année 2022</h1>
			<div className="growth">
				<span>Revue</span>
			</div>
			</div>
		</div>
		<div className="chart">
			<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				width={500}
				height={400}
				data={data}
				margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
			>
				<Tooltip cursor={false} />
				<Area
				animationBegin={800}
				animationDuration={2000}
				type="monotone"
				dataKey="commits"
				stroke="#ffc107"
				fill="#8068233e"
				strokeWidth={4}
				/>
			</AreaChart>
			</ResponsiveContainer>
		</div>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 20rem;
	${cardStyles}
	padding: 2rem 0 0 0;
	.top {
		.info {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.2rem;
		h1 {
			font-size: 2rem;
		}
		.growth {
			background-color: #d7e41e1d;
			padding: 0.5rem;
			border-radius: 1rem;
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
	.chart {
		height: 70%;
		.recharts-default-tooltip {
		background-color: black !important;
		border-color: black !important;
		}
	}
	@media screen and (min-width: 280px) and (max-width: 1080px) {
	}
`;