import React, { useState, useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";

import image from "../assets/Profil.jpg";

import Navbar from "./Navbar";

export default function Profil() {
	return (
		<Section>
			<Navbar />
			<div className="profile">
				<img src={image} alt="Profil" />
				<h2>KLS</h2>
				<p>Étudiant développeur</p>
				<div className="social-links">
					<a href="https://www.linkedin.com/in/kyliann-levesque-87711a277/" target="_BLANK">
						LinkedIn
					</a>
					<a href="https://github.com/IKLSI" target="_BLANK">
						GitHub
					</a>
				</div>
				<div className="bio">
					<p>
						Étudiant en BUT Informatique, je suis passionné par le développement et plus particulièrement par le développement web.
						Je continue constamment à me former et j'ai acquis des compétences dans diverses technologies.
					</p>
				</div>
			</div>
		</Section>
	);
}

const Section = styled.section`
	margin-left: 18vw;
	padding: 2rem;
	height: 100%;
	background-color: cyan;
	border-radius: 10px;
	overflow: hidden;

	.profile {
		text-align: center;
	}

	.profile img {
		border-radius: 50%;
		display: block;
		width: 20%;
		border: 3px solid #ffc107;
		margin: 0 auto;
	}

	.profile h2 {
		font-size: 1.5rem;
		font-weight: 500;
		color: #212121;
		margin-top: 1rem;
	}

	.profile p {
		font-size: 1.2rem;
		color: #757575;
		margin-bottom: 1rem;
	}

	.social-links {
		display: flex;
		justify-content: center;
		margin-top: 1rem;

		a {
			margin: 0 0.5rem;
			color: #212121;
			text-decoration: none;
			font-weight: 500;

			&:hover {
				color: #ffc107;
			}
		}
	}

	.bio {
		margin-top: 1rem;
		background-color: #212121;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
	}

	@media (max-width: 1200px) {
		margin-left: 0;
		
		.profile img {
			width: 35%;
			margin-top: 2rem;
		}
	}
`;