import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import TripTabTables from "../TripTabTables/TripTabTables";
import TripNavbar from "../TripNavbar/TripNavbar";
import "./TripDashboard.css";
import Map from "../Map/Map";
import Sidebar from "../TripSidebarAndSlide/Sidebar/Sidebar";
import SlideWindow from "../TripSidebarAndSlide/SlideWindow/SlideWindow";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import TrucksDetails from "../TrucksDetails/TrucksDetails";
import DriverDetails from "../DriverDetails/DriverDetails";
import ClientDetails from "../ClientDetails/ClientDetails";

export default function TripDashboard() {
	const { url, path } = useRouteMatch();
	console.log(url, path);
	return (
		<div className='TripDashboard'>
			<TripNavbar />
			<Switch>
				<Route exact path={path}>
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
							</div>
						</div>
						<Map />
					</div>
				</Route>
				<Route exact path={path + "/trucks"}>
					<TrucksDetails />
				</Route>
				<Route exact path={path + "/drivers"}>
					<DriverDetails />
				</Route>
				<Route exact path={path + "/clients"}>
					<ClientDetails />
				</Route>
			</Switch>

			{/* <TripTabTables /> */}
		</div>
	);
}
