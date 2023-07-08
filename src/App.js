import React, { useState } from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import DashProjet from "./components/DashProjet";
import Profil from "./components/Profil";
import Menu from "./components/Menu";
import Language from "./components/Langage";

export default function App() {
const [currentLink, setCurrentLink] = useState("1");

return (
	<Div>
	<Menu currentLink={currentLink} setCurrentLink={setCurrentLink} />
	{currentLink === "1" && <Dashboard />}
	{currentLink === "2" && <Profil />}
	{currentLink === "3" && <DashProjet />}
	{currentLink === "4" && <Language />}
	</Div>
);
}

const Div = styled.div`
position: relative;
`;