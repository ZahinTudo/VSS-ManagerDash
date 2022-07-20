import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import "./ClientDetails.css";
import TripTabTables from "../TripTabTables/TripTabTables";
import AddSlidingWindow from "../AddSlidingWindow/AddSlidingWindow";
import { useAnimation } from "framer-motion";
import BasicDetailsComponent from "./BasicDetailsComponent/BasicDetailsComponent";
export default function ClientDetails() {
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
			component: <BasicDetailsComponent />,
		},
		{
			name: "add truck",
			id: 2,
			component: "2",
		},
	];
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
				addBtn={handleAddSlidingWindow}
				deleteBtn={deleteBtn}
				chatBtn={chatBtn}
				type='client'
			/>
			<AddSlidingWindow
				AddSlidingWindowAnimation={AddSlidingWindowAnimation}
				title='Client'
				components={SlidingWindowTabs}
			/>
		</div>
	);
}
