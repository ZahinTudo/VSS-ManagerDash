import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import "./ClientDetails.css";
import TripTabTables from "../TripTabTables/TripTabTables";
export default function ClientDetails() {
	const tabs = [
		{
			name: "Active",
			url: "/Clients.json",
		},
		{
			name: "Deactivated",
			url: "/Clients.json",
		},
	];
	const handleFiltering = () => {
		//filtering
	};
	const filters = [
		{
			name: "status",
			Onclick: handleFiltering,
		},
		{
			name: "ongoing",
			Onclick: handleFiltering,
		},
		{
			name: "state",
			Onclick: handleFiltering,
		},
		{
			name: "city",
			Onclick: handleFiltering,
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
			<TripFilters filters={filters} />
			<TripTabTables
				tabs={tabs}
				addBtn={addBtn}
				deleteBtn={deleteBtn}
				chatBtn={chatBtn}
				type='client'
			/>
		</div>
	);
}
