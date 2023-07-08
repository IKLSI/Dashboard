import React, { useEffect } from "react";
import styled from "styled-components";
import scrollreveal from "scrollreveal";

import Navbar from "./Navbar";

export default function LanguageList() {
useEffect(() => {
	const sr = scrollreveal({
		origin: "bottom",
		distance: "80px",
		duration: 2000,
		reset: false,
	});
	sr.reveal(
	`
		.container,
		.language
	`,
	{
		opacity: 0,
		interval: 100,
	}
	);
}, []);

return (
	<Container>
	<Navbar />
	<LanguageContainer>
		<Language>
		<LanguageIcon src="https://cdn.svgporn.com/logos/html-5.svg" />
		<div>
			<LanguageName>HTML 5</LanguageName>
			<LanguageLevel>Avancé</LanguageLevel>
		</div>
		</Language>
		<Language>
		<LanguageIcon src="https://cdn.svgporn.com/logos/css-3.svg" />
		<div>
			<LanguageName>CSS</LanguageName>
			<LanguageLevel>Avancé</LanguageLevel>
		</div>
		</Language>
		<Language>
		<LanguageIcon src="https://cdn.svgporn.com/logos/javascript.svg" />
		<div>
			<LanguageName>JavaScript</LanguageName>
			<LanguageLevel>Intermédiaire</LanguageLevel>
		</div>
		</Language>
		<Language>
		<LanguageIcon src="https://cdn.svgporn.com/logos/php.svg" />
		<div>
			<LanguageName>PHP</LanguageName>
			<LanguageLevel>Intermédiaire</LanguageLevel>
		</div>
		</Language>
		<Language>
		<LanguageIcon src="https://cdn.svgporn.com/logos/java.svg" />
		<div>
			<LanguageName>Java</LanguageName>
			<LanguageLevel>Avancé</LanguageLevel>
		</div>
		</Language>
		<Language>
		<LanguageIcon src="https://cdn.svgporn.com/logos/c.svg" />
		<div>
			<LanguageName>C</LanguageName>
			<LanguageLevel>Débutant</LanguageLevel>
		</div>
		</Language>
		<Language>
		<LanguageIcon src="https://cdn.svgporn.com/logos/mysql.svg" />
		<div>
			<LanguageName>SQL</LanguageName>
			<LanguageLevel>Intermédiaire</LanguageLevel>
		</div>
		</Language>
		<Language>
		<LanguageIcon src="https://cdn.svgporn.com/logos/bash.svg" />
		<div>
			<LanguageName>Shell</LanguageName>
			<LanguageLevel>Débutant</LanguageLevel>
		</div>
		</Language>
	</LanguageContainer>
	<SeparatorLine />
	</Container>
);
}

const Container = styled.div`
	margin-left: 18vw;
	padding: 2rem;
	height: 100%;
	background-color: cyan;
	border-radius: 10px;
	overflow: hidden;
`;

const LanguageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;

const Language = styled.div`
	background-color: #f5f5f5;
	padding: 1rem;
	border-radius: 4px;
	margin-top: 2rem;
	display: flex;
	align-items: center;
`;

const LanguageName = styled.h3`
	margin: 0;
`;

const LanguageLevel = styled.p`
	margin: 0;
	font-size: 0.8rem;
	color: #888;
`;

const LanguageIcon = styled.img`
	width: 50px;
	height: 50px;
	margin-right: 1rem;
`;

const SeparatorLine = styled.hr`
	border: none;
	height: 1px;
	background-color: #ffc107;
	margin: 2rem 0;
`;