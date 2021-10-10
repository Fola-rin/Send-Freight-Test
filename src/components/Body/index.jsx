import React, { useState } from "react";

import {
	ArrowBackOutlined,
	Flight,
	DirectionsBoat,
	LocalShipping,
	PersonOutlineOutlined,
	InfoOutlined,
	LocationOn,
	CalendarToday,
	ArrowDropDown,
} from "@material-ui/icons";

import "./style.css";

const Body = () => {
	const [activeService, setActiveService] = useState("air");
	const [dropdown, setDropdown] = useState(false);
	const [toggleHeader, setToggleHeader] = useState("left");
	return (
		<div className="main-container">
			<div className="body-header">
				<div className="icon-wrapper">
					<button>
						<ArrowBackOutlined />
					</button>
				</div>
				<h2>New Booking</h2>
				<p>
					Fill in the information below to get a quote or create a new booking
				</p>
			</div>
			<div className="card-wrapper">
				<div className="first-card">
					<h3>Select a service</h3>
					<div className="services">
						<Service
							title="Air Freight"
							Img={Flight}
							onClick={() => setActiveService("air")}
							active={activeService}
							serviceClass="air"
						/>
						<Service
							title="Sea Freight"
							Img={DirectionsBoat}
							onClick={() => setActiveService("boat")}
							serviceClass="boat"
							active={activeService}
						/>
						<Service
							title={
								<>
									Inland
									<br />
									(Truck & Barge)
								</>
							}
							Img={LocalShipping}
							serviceClass="truck"
							active={activeService}
							onClick={() => setActiveService("truck")}
						/>
						<Service
							title={
								<>
									Customs
									<br /> Clearance
								</>
							}
							Img={PersonOutlineOutlined}
							active={activeService}
							onClick={() => setActiveService("customs")}
							serviceClass="customs"
						/>
					</div>
				</div>
			</div>
			<div className="card-wrapper">
				<InfoOutlined className="first-icon" />
				<div className="port-info-wrapper">
					<div className="import-export">
						<div className="import">
							<span>Import</span>
						</div>
						<div className="export">
							<span>Export</span>
						</div>
					</div>
					<div className="location">
						<LocationOn />
						<p>
							<span>From </span>City or port
						</p>
					</div>
					<div className="location">
						<LocationOn />
						<p>
							<span> To</span> City or port
						</p>
					</div>
				</div>
				<div className="port-info-wrapper">
					<div className="date">
						<CalendarToday />
						<span>Ready Date</span>
					</div>
					<div className="dropdown">
						<div className="trigger" onClick={() => setDropdown(!dropdown)}>
							<span>Incoterms</span>
							<ArrowDropDown />
						</div>
						{dropdown && (
							<div className="items">
								<p>Item 1</p>
								<p>Item 2</p>
								<p>Item 3</p>
								<p>Item 4</p>
							</div>
						)}
					</div>
					<div className="total">
						<span>Total Cargo Value</span>
					</div>
				</div>
			</div>
			<div className="card-wrapper">
				<div className="third-card">
					<div className="card-header">
						<h3>Cargo Details</h3>
						<div className="desc">
							<ToggleSwitch active={true} />
							<p>
								Dangerous Cargo <span>(ex. Chemicals, Battery)</span>
							</p>
						</div>
					</div>
					<div className="toggle-header">
						<div
							className={`toggle-bg ${
								toggleHeader === "right" ? "right" : null
							}`}
						></div>
						<div className="items">
							<div
								className={`item ${toggleHeader === "left" ? "active" : null}`}
								onClick={() => setToggleHeader("left")}
							>
								<span>Total Dimensions</span>
							</div>
							<div
								className={`item ${toggleHeader === "right" ? "active" : null}`}
								onClick={() => setToggleHeader("right")}
							>
								<span>Package Details</span>
							</div>
						</div>
					</div>
					<div className="input-container">
						<MagicInput name="Total Volume" unit="cbm" />
						<MagicInput name="Total Weight" unit="Kg" />
					</div>
				</div>
			</div>

			<div className="card-wrapper">
				<h3 className="title">Additional Services</h3>
				<div className="fourth-card">
					<GridItem
						name="Export Fowarding"
						info="We handle customs clearance and documentation"
					/>
					<GridItem
						name="Import Customs Clearance"
						info="We handle import customs and regulatory requirements."
					/>
					<GridItem
						name="Cargo Insurance"
						info="Protect your cargo from logistics risks up to its full value."
					/>
					<GridItem
						name="Transport / Delivery"
						info="We deliver cargo to your door
from the ports."
					/>
				</div>
			</div>
		</div>
	);
};

export default Body;

const Service = ({ title, Img, serviceClass, active, onClick }) => {
	return (
		<div
			className={`service ${serviceClass} ${
				active === serviceClass ? "active" : null
			}`}
			onClick={onClick}
		>
			<p>{title}</p>
			<Img />
		</div>
	);
};

const ToggleSwitch = ({ active }) => {
	return (
		<label className="switch">
			<input type="checkbox" defaultChecked={active} />
			<span className="slider round"></span>
		</label>
	);
};

const MagicInput = ({ name, unit, focus }) => {
	return (
		<div className="input-wrapper">
			<input type="text" required autoFocus={focus} />
			<label>{name}</label>
			<div className="unit">
				<span>{unit}</span>
			</div>
		</div>
	);
};

const GridItem = ({ name, info }) => {
	return (
		<div className="item">
			<ToggleSwitch />
			<div className="desc">
				<h3>{name}</h3>
				<p>{info}</p>
			</div>
		</div>
	);
};
