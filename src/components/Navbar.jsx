import React, { useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const items = ["Profil", "Projet", "Langage"];

export default function Navbar() {
const [isListVisible, setIsListVisible] = useState(false);
const [searchInput, setSearchInput] = useState("");
const filteredItems = items.filter(
	(item) =>
	item.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
);

const handleSearchClick = () => {
	setIsListVisible(!isListVisible);
};

const handleInputChange = (event) => {
	setSearchInput(event.target.value);
	setIsListVisible(true);
};

return (
	<Nav>
	<div className="title">
		<h1>
		Voici mon <span>DASHBOARD GITHUB</span>
		</h1>
	</div>
	<div className="search" onClick={handleSearchClick}>
		<BiSearch />
		<input
		type="text"
		placeholder="Rechercher"
		value={searchInput}
		onChange={handleInputChange}
		/>
		{isListVisible && filteredItems.length > 0 && (
		<ul className="search-list">
		{filteredItems.map((item, index) => (
			<li key={index}>{item}</li>
		))}
		</ul>
	)}
	</div>
	</Nav>
);
}

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	color: white;
	.title {
		h1 {
			span {
				margin-left: 0.5rem;
				color: #ffc107;
				font-family: "Permanent Marker", cursive;
				letter-spacing: 0.2rem;
			}
		}
	}

	.search {
		background-color: #212121;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 8rem 1rem 1rem;
		border-radius: 1rem;
			input {
			background-color: transparent;
			border: none;
			color: #ffc107;
			font-family: "Permanent Marker", cursive;
			letter-spacing: 0.3rem;
			&:focus {
				outline: none;
			}
			&::placeholder {
				color: #ffc107;
				font-family: "Permanent Marker", cursive;
			}
		}
	}

	.search-list {
		gap: 1rem;
		display: flex;
		list-style: none;
		font-family: cursive;
		font-weight: bold;
		color: #ffc107;

		li {
			padding: 0.5rem 1rem;
			&:hover {
				color: cyan;
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 1080px) {
		flex-direction: column;
		.title {
			h1 {
				span {
				display: block;

				margin: 1rem 0;
				/* letter-spacing: 0; */
				}
			}
		}
	}
`;
