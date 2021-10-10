import React from "react";

import logo from "../../assets/logo.jpeg";
import { Search } from "@material-ui/icons";

import "./style.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logo-search-container">
				<div className="logo-wrapper">
					<img src={logo} alt="send frieght logo" />
				</div>
				<div className="search-bar-wrapper">
					<input placeholder="Search" />
					<div className="search-icon">
						<Search />
					</div>
				</div>
			</div>
			<div className="cta-buttons-wrapper">
				<a href="/" className="request">
					Request Quote
				</a>
				<a href="/" className="book">
					Book Shipment
				</a>
			</div>
		</div>
	);
};

export default Header;
