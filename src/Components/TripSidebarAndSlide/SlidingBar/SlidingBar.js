import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs } from "react-bootstrap";

export default function SlidingBar({
	controlAnimation,
	slidebarClose,
	currentId,
}) {
	const { allMarkers } = useSelector((state) => state.allMarkers);
	const [key, setKey] = useState("Tracking");
	return (
		<motion.div
			className='slidingBar'
			initial={{ opacity: 1, x: -500 }}
			animate={controlAnimation}>
			<div className='d-flex align-items-center '>
				<span
					style={{ cursor: "pointer" }}
					onClick={slidebarClose}
					className='me-2'>
					<FontAwesomeIcon icon={faAngleLeft} />
				</span>
				<span>{allMarkers[currentId]?.License}</span>
			</div>
			<div className='d-flex flex-wrap align-items-center justify-content-between'>
				<div className='d-flex flex-column p-1'>
					<small className='text-secondary'>Source</small>
					<span className='slideText'>
						{allMarkers[currentId]?.Start}
					</span>
				</div>
				<div className='d-flex flex-column p-1'>
					<small className='text-secondary'>Destination</small>
					<span className='slideText'>
						{allMarkers[currentId]?.end}
					</span>
				</div>
				<div className='d-flex flex-column p-1'>
					<small className='text-secondary'>Client</small>
					<span className='slideText'>
						{allMarkers[currentId]?.company}
					</span>
				</div>
				<div className='d-flex flex-column p-1'>
					<small className='text-secondary'>Start Date</small>
					<span className='slideText'>
						{allMarkers[currentId]?.startDate}
					</span>
				</div>
				<div className='d-flex flex-column p-1'>
					<small className='text-secondary'>End Date</small>
					<span className='slideText'>
						{allMarkers[currentId]?.endDate}
					</span>
				</div>
			</div>
			<div className='py-2 d-flex align-items-center justify-content-between'>
				<span className='slideText text-secondary'>Driver Name</span>
				<div>
					<a className='me-2'>{allMarkers[currentId]?.driver}</a>
					<span>
						<FontAwesomeIcon icon={faPhone} />
					</span>
				</div>
			</div>
			<div className=''>
				<Tabs
					id='controlled-tab-example'
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className='mb-3'>
					<Tab eventKey='Tracking' title='Tracking'>
						<div className='d-flex align-items-center justify-content-end'>
							<span className='text-secondary slideText me-2'>
								Update 5 min ago
							</span>
							<span className='btn btn-secondary slideText'>
								Refresh
							</span>
						</div>
					</Tab>
					<Tab eventKey='TruckDetails' title='Truck Details'>
						Truck Details
					</Tab>
				</Tabs>
			</div>
		</motion.div>
	);
}
