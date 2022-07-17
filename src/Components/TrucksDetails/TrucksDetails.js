import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import "./TrucksDetails.css";
import TripTabTables from "../TripTabTables/TripTabTables";
export default function TrucksDetails() {
	const tabs = [
		{
			name: "Active",
			url: "/Trucks.json",
		},
		{
			name: "In Garage",
			url: "/jsonviewer.json",
		},
	];
	const addBtn = () => {
		//do add function
	};
	const deleteBtn = () => {
		//delete function
	};
	const chatBtn = () => {
		//chat
	};
	return (
		<div
			style={{
				width: "100vw",
				flex: 1,
			}}
			className='truckDetails'>
			<TripFilters />
			<TripTabTables
				tabs={tabs}
				addBtn={addBtn}
				deleteBtn={deleteBtn}
				chatBtn={chatBtn}
				type='truck'
			/>
		</div>
	);
}
