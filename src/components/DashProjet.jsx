import React from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";

import { BiSearch } from "react-icons/bi";

import Navbar from "./Navbar";

export default function DashProjet() {
	return (
		<Section>
		<div>
			<Navbar />
			<HorizontalBadge
				title="Dashboard"
				text="Dashboard de présentation de mon GitHub, de mes projets et de mes compétences en React.js."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="Portfolio_KLS"
				text="Conçu dans le but de me présenter, mes compétences ainsi que quelques projets réalisés. Formulaire de contact en cas de besoin."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="RC"
				text="Plateforme de présentation de produits radiocommandés, gestion de compte utilisateur, paiement. Dépôt d'avis et de commentaires."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="Discord_Bot"
				text="Réalisation d'un bot Discord en Node.js, permettant de gérer un serveur Discord."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="TDL"
				text="Développement d'une application de gestion de tâches en React.js."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="Graphe"
				text="Jeu de parcours avec différentes fonctionnalités en Java."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="Lecteur"
				text="Lecteur de vidéos depuis l'API Youtube."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="Chat"
				text="Mise en place d'un chat en réseau sur Docker en php."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="Depot"
				text="Mise en place d'un dépôt de fichiers en réseau sur Docker en js."
				icon={<BiSearch />}
			/>
			<HorizontalBadge
				title="Projet_Reseau"
				text="Lecteur musical en réseau grâce au Websocket en Java."
				icon={<BiSearch />}
			/>
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

	.grid {
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: 1rem;
		margin-top: 2rem;
		
		.row__one {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			height: 50%;
			gap: 1rem;
		}
		
		.row__two {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
			height: 50%;
		}
	}

	@media screen and (max-width: 1080px) {
		margin-left: 0;
		
		.grid {
			.row__one,
			.row__two {
				grid-template-columns: 1fr;
			}
		}
	}
`;

const BadgeContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
	padding: 1rem;
	background-color: #212121;
	color : white;
	border-radius: 5px;
`;

const BadgeIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	background-color: #ffc107;
	border-radius: 50%;
	margin-right: 1rem;
`;

const BadgeContent = styled.div`
	flex: 1;
`;

const BadgeTitle = styled.h3`
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
`;

const BadgeText = styled.p`
	font-size: 1rem;
	color: #888;
`;

const HorizontalBadge = ({ title, text, icon }) => {
	return (
		<BadgeContainer>
		<BadgeIcon>{icon}</BadgeIcon>
		<BadgeContent>
			<BadgeTitle>{title}</BadgeTitle>
			<BadgeText>{text}</BadgeText>
		</BadgeContent>
		</BadgeContainer>
	);
};