import React from "react";
import TripFilters from "../TripFilters/TripFilters";
import "./DriverDetails.css";
import TripTabTables from "../TripTabTables/TripTabTables";
import AddSlidingWindow from "../AddSlidingWindow/AddSlidingWindow";
import { useAnimation } from "framer-motion";
import DriverBasicDetails from "./DriverBasicDetails/DriverBasicDetails";
import DriverBankDetails from "./DriverBankDetails/DriverBankDetails";
import UploadDocuments from "./UploadDocuments/UploadDocuments";
export default function DriverDetails() {
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
			component: <DriverBasicDetails />,
		},
		{
			name: "Bank Details",
			id: 2,
			component: <DriverBankDetails />,
		},
		{
			name: "Upload Documents",
			id: 3,
			component: <UploadDocuments />,
		},
	];
	const Tabletabs = [
		{
			name: " Occupied",
			url: "/Drivers.json",
		},
		{
			name: "Available",
			url: "/Drivers.json",
		},
		{
			name: "Deactivated",
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
			className='DetailsIndividualPage'>
			<TripFilters filters={filters} />
			<TripTabTables
				tabs={Tabletabs}
				addBtn={handleAddSlidingWindow}
				deleteBtn={deleteBtn}
				chatBtn={chatBtn}
				type='driver'
			/>
			<AddSlidingWindow
				AddSlidingWindowAnimation={AddSlidingWindowAnimation}
				title='Driver'
				components={SlidingWindowTabs}
			/>
		</div>
	);
}
