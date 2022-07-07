import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import TripTabTables from "../TripTabTables/TripTabTables";
import TripNavbar from "../TripNavbar/TripNavbar";
import "./TripDashboard.css";
import Map from "../Map/Map";
export default function TripDashboard() {
	return (
		<div className='TripDashboard'>
			{/* <TripNavbar /> */}
			<TripNavbar />
			<div
				className='position-relative'
				style={{ width: "100vw", height: "100vh" }}>
				<TripFilters />
				<Map />
			</div>

			{/* <TripTabTables /> */}
		</div>
	);
}
