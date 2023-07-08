import React from "react";
import styled from "styled-components";

import image from "../assets/Profil.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./StyleCommun";

export default function Profile() {
	return (
		<Section>
		<div className="image">
			<img src={image} alt="" />
		</div>
		<div className="title">
			<h2>KLS</h2>
			<h5>
			<HiOutlineLocationMarker /> France
			</h5>
		</div>

		<div className="info">
			<div className="container">
			<h5>Âge</h5>
			<h3>19</h3>
			</div>
			<div className="container">
			<h5>Status</h5>
			<h3>Étudiant</h3>
			</div>
		</div>
		</Section>
	);
}

const Section = styled.section`
	${cardStyles};
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		.image {
			max-height: 10rem;
			overflow: hidden;
			border-radius: 20rem;
			img {
			height: 10rem;
			width: 10rem;
			object-fit: cover;
			border-radius: 20rem;
			transition: 0.5s ease-in-out;
			}
			&:hover {
			img {
				transform: scale(1.1);
			}
			}
		}

		.title {
			text-align: center;
			h2,
			h5 {
			color: #ffc107;
			font-family: "Permanent Marker", cursive;
			letter-spacing: 0.3rem;
			}
			h5 {
			letter-spacing: 0.2rem;
			}
		}

		.info {
			display: flex;
			gap: 1rem;
			.container {
			text-align: center;
			}
		}
	}
`;