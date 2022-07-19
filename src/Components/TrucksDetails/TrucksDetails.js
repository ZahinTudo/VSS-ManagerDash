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
			url: "/Trucks.json",
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
			name: "source",
			Onclick: handleFiltering,
		},
		{
			name: "class",
			Onclick: handleFiltering,
		},
		{
			name: "capacity",
			Onclick: handleFiltering,
		},
		{
			name: "model",
			Onclick: handleFiltering,
		},
		{
			name: "company",
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
				type='truck'
			/>
		</div>
	);
}
