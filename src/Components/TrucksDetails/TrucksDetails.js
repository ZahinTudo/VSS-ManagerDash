import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import "./TrucksDetails.css";
import TripTabTables from "../TripTabTables/TripTabTables";
import { useAnimation } from "framer-motion";
import AddSlidingWindow from "../AddSlidingWindow/AddSlidingWindow";
export default function TrucksDetails() {
	const AddSlidingWindowAnimation = useAnimation();
	const handleAddSlidingWindow = () => {
		AddSlidingWindowAnimation.start({
			width: 600,
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.1,
			},
		});
	};
	const SlidingWindowTabs = [
		{
			name: "Basic Details",
			id: 1,
			component: "",
		},
		{
			name: "Upload Documents",
			id: 2,
			component: "",
		},
		{
			name: "Permits",
			id: 3,
			component: "",
		},
	];
	const Tabletabs = [
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
				tabs={Tabletabs}
				addBtn={handleAddSlidingWindow}
				deleteBtn={deleteBtn}
				chatBtn={chatBtn}
				type='truck'
			/>
			<AddSlidingWindow
				AddSlidingWindowAnimation={AddSlidingWindowAnimation}
				title='truck'
				components={SlidingWindowTabs}
			/>
		</div>
	);
}
