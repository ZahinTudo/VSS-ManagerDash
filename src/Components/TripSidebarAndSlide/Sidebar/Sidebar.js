import React, { useState } from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleLeft,
	faPhone,
	faTruck,
	faPencil,
	faTrash,
	faBell,
	faMapMarkerAlt,
	faCross,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs } from "react-bootstrap";
export default function Sidebar() {
	const { allMarkers } = useSelector((state) => state.allMarkers);
	const [currentId, setCurrentId] = useState(null);
	const [prevActiveId, setPrevActiveId] = useState(null);
	const [key, setKey] = useState("Tracking");
	const { MapRef } = useSelector((state) => state.MapRef);

	const variants = {
		visible: { opacity: 1, x: "215px" },
		hidden: { opacity: 0, x: "0%" },
	};
	const controlAnimation = useAnimation();

	const slidebarOpen = (id) => {
		const displacement = document.querySelector(".sidebar").offsetWidth;
		if (prevActiveId == null) {
			setPrevActiveId("marker-" + id);
			const swithToActive = document.querySelector(
				`[data-markerId=${"marker-" + id}]`
			);
			swithToActive.classList.add("active");
		} else {
			setPrevActiveId("marker-" + id);
			const swithToNotActive = document.querySelector(
				`[data-markerId=${prevActiveId}]`
			);
			swithToNotActive.classList.remove("active");

			const swithToActive = document.querySelector(
				`[data-markerId=${"marker-" + id}]`
			);
			swithToActive.classList.add("active");
		}
		controlAnimation.start({
			x: displacement + 8,
			opacity: 1,
		});
		setCurrentId(id);
	};
	const slidebarClose = () => {
		const swithToNotActive = document.querySelector(
			`[data-markerId=${prevActiveId}]`
		);
		swithToNotActive.classList.remove("active");
		controlAnimation.start({
			x: -500,
			opacity: 0,
		});
	};
	const centerFocusedMarker = (e, id) => {
		e.stopPropagation();
		const pos = allMarkers[id].position;
		// console.log(MapRef);
		MapRef?.setCenter(pos);
		MapRef?.setZoom(10);
	};
	// ====================================
	const [prevId, setPrevId] = useState(0);
	// const selectMarkerBox = (index) => {
	// 	const prev = document.querySelector(
	// 		`[data-markerId=${"markerbox-" + prevId}]`
	// 	);
	// 	prev.classList.remove("active");

	// 	const current = document.querySelector(
	// 		`[data-markerId=${"markerbox-" + index}]`
	// 	);
	// 	current.classList.add("active");
	// 	setPrevId(index);
	// };
	return (
		<div className='sidebar py-3'>
			<p className='sidebar-title'>Trips</p>
			<div
				className='markerWrapper'
				style={{ flex: 1, overflowY: "scroll" }}>
				{allMarkers?.map((item, index) => (
					<div
						key={"marker-" + index}
						data-markerId={"marker-" + index}
						onClick={() => slidebarOpen(index)}
						className={`markerBox`}>
						<div className='markerBoxCarLogo'>
							<img
								src='/assets/truck.svg'
								alt=''
								className='img-fluid'
							/>
						</div>
						<div style={{ flex: 1 }}>
							<div className='truckDetail'>
								<div
									className='d-flex flex-column'
									style={{ marginRight: "23px" }}>
									<span className='truckLiciense'>
										{item.License}
									</span>
									<span className='truckCompany'>
										{item.company}
									</span>
									<span className='truckRoute'>
										{item.Start}-{item.end}
									</span>
								</div>
								<div className='sosBtn'>
									<img
										src='/assets/sos.png'
										alt=''
										className='img-fluid'
										srcset=''
									/>
								</div>
							</div>
							<div className='d-flex iconOptions'>
								<span style={{ marginRight: "28px" }}>
									<img
										src='/assets/pen.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
								<span style={{ marginRight: "28px" }}>
									<img
										src='/assets/chat.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
								<span
									onClick={(e) =>
										centerFocusedMarker(e, index)
									}>
									<img
										src='/assets/marker.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
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
					<span className='slideText text-secondary'>
						Driver Name
					</span>
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
		</div>
	);
}
