import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import "./TrucksDetails.css";
import TripTabTables from "../TripTabTables/TripTabTables";
export default function TrucksDetails() {
	return (
		<div
			style={{
				width: "100vw",
				flex: 1,
			}}
			className='truckDetails'>
			<TripFilters />
			<TripTabTables />
		</div>
	);
}
