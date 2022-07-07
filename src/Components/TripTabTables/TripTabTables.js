import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import TabTable from "./Table/TabTable";

import "./TripTabTables.css";
export default function TripTabTables() {
	const [key, setKey] = useState("ActiveTrip");

	return (
		<div className='tripTabTable'>
			{/* <span onClick={() => setKey("ActiveTrip")}>A</span>
			<span onClick={() => setKey("ScheduledTrip")}>B</span> */}
			<Tabs
				id='controlled-tab-example'
				activeKey={key}
				onSelect={(k) => setKey(k)}
				className='mb-3'>
				<Tab eventKey='ActiveTrip' title='Active Trip'>
					<div className='activTable'>
						<TabTable />
					</div>
				</Tab>
				<Tab eventKey='ScheduledTrip' title='Scheduled Trip'>
					2
				</Tab>
			</Tabs>
		</div>
	);
}
