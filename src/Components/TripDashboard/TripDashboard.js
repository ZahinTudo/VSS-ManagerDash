import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import TripTabTables from "../TripTabTables/TripTabTables";
import TripNavbar from "../TripNavbar/TripNavbar";
import "./TripDashboard.css";
import Map from "../Map/Map";
import Sidebar from "../TripSidebarAndSlide/Sidebar/Sidebar";
import SlideWindow from "../TripSidebarAndSlide/SlideWindow/SlideWindow";
export default function TripDashboard() {
	return (
		<div className='TripDashboard'>
			{/* <TripNavbar /> */}
			<TripNavbar />
			<div
				className='position-relative'
				style={{
					width: "100vw",
					flex: 1,
				}}>
				<div
					className='position-absolute w-100 h-100'
					style={{
						zIndex: 500,
						pointerEvents: "none",
						padding: "8px 65px 29px 24px",
					}}>
					<TripFilters />
					<div style={{ marginTop: "8px" }}>
						<Sidebar />
						{/* <SlideWindow /> */}
					</div>
				</div>
				<Map />
			</div>

			{/* <TripTabTables /> */}
		</div>
	);
}
