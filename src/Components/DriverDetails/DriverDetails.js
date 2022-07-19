import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import "./DriverDetails.css";
import TripTabTables from "../TripTabTables/TripTabTables";
export default function DriverDetails() {
	const tabs = [
		{
			name: "Active Driver",
			url: "/Drivers.json",
		},
		{
			name: "Available Driver",
			url: "/Drivers.json",
		},
		{
			name: "Offline Driver",
			url: "/Drivers.json",
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
	const handleFiltering = () => {
		//filtering
	};
	const filters = [
		{
			name: "status",
			Onclick: handleFiltering,
		},
		{
			name: "zone",
			Onclick: handleFiltering,
		},
		{
			name: "language",
			Onclick: handleFiltering,
		},
		{
			name: "last trip",
			Onclick: handleFiltering,
		},
	];
	return (
		<div
			style={{
				width: "100vw",
				flex: 1,
			}}
			className='truckDetails'>
			<TripFilters filters={filters} />
			<TripTabTables
				tabs={tabs}
				addBtn={addBtn}
				deleteBtn={deleteBtn}
				chatBtn={chatBtn}
				type='driver'
			/>
		</div>
	);
}
