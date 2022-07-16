import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TabTable from "./Table/TabTable";

import "./TripTabTables.css";
export default function TripTabTables() {
	const [key, setKey] = useState("ActiveTrip");
	const [activeTrip, setActiveTrip] = useState(null);
	// const [fetchUrl, setFetchUrl] = useState("/Trucks.json");
	useEffect(() => {
		// axios.get("/ActiveTable.json").then((res) => console.log(res.data));
		const fetchUrl =
			key === "ActiveTrip" ? "/jsonviewer.json" : "/jsonviewer.json";
		fetch(fetchUrl)
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((result) => {
				console.log(result);
				setActiveTrip(result);
			})
			.catch((err) => console.log(err));
	}, [key]);

	return (
		<div className='tripTabTable'>
			<div className='d-flex align-items-center justify-content-between'>
				<div>
					<ul className='mb-3 nav nav-tabs' role='tablist'>
						<li
							eventKey='ActiveTrip'
							class='nav-item'
							role='presentation'>
							<button
								onClick={() => setKey("ActiveTrip")}
								type='button'
								id='controlled-tab-example-tab-ActiveTrip'
								role='tab'
								data-rr-ui-event-key='ActiveTrip'
								aria-controls='controlled-tab-example-tabpane-ActiveTrip'
								className={`nav-link ${
									key === "ActiveTrip" ? "active" : ""
								}`}
								aria-selected='true'>
								Active
							</button>
						</li>
						<li
							eventKey='InGarage'
							className='nav-item'
							role='presentation'>
							<button
								onClick={() => setKey("InGarage")}
								type='button'
								id='controlled-tab-example-tab-InGarage'
								role='tab'
								data-rr-ui-event-key='InGarage'
								aria-controls='controlled-tab-example-tabpane-InGarage'
								className={`nav-link ${
									key === "ActiveTrip" ? "" : "active"
								}`}
								tabindex='-1'>
								In Garage
							</button>
						</li>
					</ul>
				</div>
				<div className='d-flex align-items-center justify-content-between'>
					<span>
						<img
							src='/assets/trashCan.svg'
							alt=''
							className='img-fluid'
						/>
					</span>
					<span className='mx-4'>
						<img
							src='/assets/chat.svg'
							alt=''
							className='img-fluid'
						/>
					</span>
					<div className='addBtn'>
						<span className='me-2'>Add Truck</span>
						<img
							src='/assets/addTrucks.png'
							alt=''
							className='img-fluid'
						/>
					</div>
				</div>
			</div>
			<Tabs
				defaultActiveKey={key}
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className='mb-3'>
				<Tab eventKey='ActiveTrip' title='Active'>
					<div className='activTable'>
						<TabTable data={activeTrip} />
					</div>
				</Tab>

				<Tab eventKey='InGarage' title='In Garage'>
					<TabTable data={activeTrip} />
				</Tab>
			</Tabs>
		</div>
	);
}
