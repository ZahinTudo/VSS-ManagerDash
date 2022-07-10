import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs } from "react-bootstrap";
import "./SlidingBar.css";

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
			initial={{ opacity: 1, x: -5000 }}
			animate={controlAnimation}>
			<div className='d-flex align-items-start justify-content-between '>
				<div className='d-flex align-item-start'>
					<span
						style={{ cursor: "pointer" }}
						onClick={slidebarClose}
						className='me-2'>
						<FontAwesomeIcon icon={faAngleLeft} />
					</span>
					<div>
						<span>{allMarkers[currentId]?.License}</span>
						{allMarkers[currentId]?.currentStatus == "driving" ? (
							<div>
								<img
									src='/assets/drivingSignal.png'
									alt=''
									className='img-fluid'
								/>
								<span className='ms-3'>driving</span>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
				<div>
					<span>
						<img
							src='/assets/pen.svg'
							alt=''
							className='img-fluid'
						/>
					</span>
					<span className='mx-3'>
						<img
							src='/assets/trashCan.svg'
							alt=''
							className='img-fluid'
						/>
					</span>
					<span>
						<img
							src='/assets/marker.svg'
							alt=''
							className='img-fluid'
						/>
					</span>
				</div>
			</div>
			<div className='d-flex flex-wrap align-items-center justify-content-between my-2'>
				<div className='row row-cols-3 col-9 gy-2'>
					<div className='col d-flex flex-column '>
						<small className='text-secondary'>Source</small>
						<span className='slideText'>
							{allMarkers[currentId]?.Start}
						</span>
					</div>
					<div className='col d-flex flex-column '>
						<small className='text-secondary'>Destination</small>
						<span className='slideText'>
							{allMarkers[currentId]?.end}
						</span>
					</div>
					<div className='col d-flex flex-column '>
						<small className='text-secondary'>Client</small>
						<span className='slideText'>
							{allMarkers[currentId]?.company}
						</span>
					</div>
					<div className='col d-flex flex-column '>
						<small className='text-secondary'>Start Date</small>
						<span className='slideText'>
							{allMarkers[currentId]?.startDate}
						</span>
					</div>
					<div className='col d-flex flex-column '>
						<small className='text-secondary'>End Date</small>
						<span className='slideText'>
							{allMarkers[currentId]?.endDate}
						</span>
					</div>
					<div className='col d-flex flex-column '>
						<small className='text-secondary'>Zone</small>
						<span className='slideText'>
							{allMarkers[currentId]?.zone}
						</span>
					</div>
				</div>
				<div className='col-3 d-flex align-items-center justify-content-center'>
					<span>
						<img
							src='/assets/sosBlue.png'
							alt=''
							className='img-fluid'
						/>
					</span>
				</div>
			</div>
			<div className='py-2 d-flex align-items-center justify-content-between'>
				<span className='slideText text-secondary'>Driver Name</span>
				<div className='d-flex align-items-center'>
					<a href className='text-dark'>
						{allMarkers[currentId]?.driver}
					</a>
					<span className='mx-3'>
						<img
							src='/assets/ChatIcon.svg'
							alt=''
							className='img-fluid'
						/>
					</span>
					<span>
						<FontAwesomeIcon icon={faPhone} />
					</span>
				</div>
			</div>
			<div className=''>
				<Tabs
					id='slidingBar'
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className='mb-3 '>
					<Tab
						className=' w-100'
						eventKey='Tracking'
						title='Tracking'>
						<div className='d-flex align-items-center justify-content-end'>
							<span className='text-secondary slideText me-2'>
								Update 5 min ago
							</span>
							<span className='btn btn-secondary slideText'>
								Refresh
							</span>
						</div>
					</Tab>
					<Tab
						className=' w-100'
						eventKey='TruckDetails'
						title='Truck Details'>
						<div className='row row-cols-3 col-12 gy-2'>
							<div className='col d-flex flex-column '>
								<small className='text-secondary'>Make</small>
								<span className='slideText'>
									{allMarkers[currentId]?.truckDetails.make}
								</span>
							</div>
							<div className='col d-flex flex-column '>
								<small className='text-secondary'>Model</small>
								<span className='slideText'>
									{allMarkers[currentId]?.truckDetails.model}
								</span>
							</div>
							<div className='col d-flex flex-column '>
								<small className='text-secondary'>
									Load Capacity
								</small>
								<span className='slideText'>
									{
										allMarkers[currentId]?.truckDetails
											.capacity
									}
								</span>
							</div>
							<div className='col d-flex flex-column '>
								<small className='text-secondary'>
									Registration State
								</small>
								<span className='slideText'>
									{
										allMarkers[currentId]?.truckDetails
											.regState
									}
								</span>
							</div>
							<div className='col d-flex flex-column '>
								<small
									className='text-secondary'
									style={{ whiteSpace: "nowrap" }}>
									Year of Manufacture
								</small>
								<span className='slideText'>
									{
										allMarkers[currentId]?.truckDetails
											.manufacturedAt
									}
								</span>
							</div>
						</div>
					</Tab>
					<Tab eventKey='Documents' title='Documents'>
						Documents
					</Tab>
					<Tab eventKey='Permit' title='Permit'>
						Permit
					</Tab>
				</Tabs>
			</div>
		</motion.div>
	);
}
