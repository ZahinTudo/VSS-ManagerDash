import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TruckDetailsSlidingWindow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SlideWindow from "../../../../TripSidebarAndSlide/SlideWindow/SlideWindow";

export default function TruckDetailsSlidingWindow({
	TruckDetailsAnimation,
	truckDetails,
}) {
	console.log(truckDetails);
	const handleClose = () => {
		TruckDetailsAnimation.start({
			x: 700,
			transition: {
				duration: 0.15,
			},
		});
	};

	return (
		<motion.div
			className='TruckDetailsSlidingWindow'
			initial={{
				x: 700,
			}}
			animate={TruckDetailsAnimation}>
			<div className='d-flex align-items-center justify-content-between'>
				<div className='d-flex flex-column align-items-start justify-content-center'>
					<span className='LicensePlate'>
						{truckDetails?.["Truck Details"].License}
					</span>
					<span className='d-flex align-items-center companyAndStatus'>
						<span className='me-2'>
							{truckDetails?.["Truck Details"].company}
						</span>
						{" | "}
						<img
							src={truckDetails?.["Status"].icon}
							alt=''
							className='img-fluid mx-2'
						/>
						<span
							className={`${
								truckDetails?.["Status"].type === "Driving" &&
								"text-success"
							}`}>
							{truckDetails?.["Status"].type}{" "}
						</span>
					</span>
				</div>

				<div className='d-flex align-items-center'>
					<img
						src='/assets/truckDetailsSlideWindow/editor.png'
						alt=''
						className='img-fluid ms-3'
					/>
					<img
						src='/assets/truckDetailsSlideWindow/delete.png'
						alt=''
						className='img-fluid ms-3'
					/>
					<img
						src='/assets/truckDetailsSlideWindow/location.png'
						alt=''
						className='img-fluid ms-3'
					/>
					<img
						style={{ cursor: "pointer" }}
						onClick={handleClose}
						src='/assets/truckDetailsSlideWindow/times.png'
						alt=''
						className='img-fluid ms-3'
					/>
				</div>
			</div>
			{/* =======================================================
                            truckDetailsSlideInfo
                ======================================================= */}
			<div className='truckDetailsSlideInfo row row-cols-4 gy-4 my-3'>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Make</span>
						<span className='infoText'>
							{truckDetails?.["Make & Model"].split(" ")[0]}
						</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Model</span>
						<span className='infoText'>
							{truckDetails?.["Make & Model"].split(" ")[1]}
						</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Load Capacity</span>
						<span className='infoText'>
							{truckDetails?.["Load Capacity"]}
						</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span
							className='title'
							style={{ whiteSpace: "nowrap" }}>
							Year of Manufacture
						</span>
						<span className='infoText'>2016</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Registration City</span>
						<span className='infoText'>
							{truckDetails?.["Registration"].City}
						</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Registration State</span>
						<span className='infoText'>
							{truckDetails?.["Registration"].State}
						</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Class</span>
						<span className='infoText'>Tata</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Unladen weight</span>
						<span className='infoText'>
							{truckDetails?.["Load Capacity"]}
						</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Chasis Number</span>
						<span className='infoText'>12345</span>
					</div>
				</div>
				<div className='col'>
					<div className='d-flex flex-column'>
						<span className='title'>Engine Number</span>
						<span className='infoText'>22112</span>
					</div>
				</div>
			</div>
			{/* =======================================================
                            truckDetailsSlideInfo
                ======================================================= */}
			<div className='d-flex align-items-center justify-content-between driverPersonal'>
				<span className='label'>Current Driver</span>
				<div className='d-flex align-items-center'>
					<span className='driverName'>Rajesh Kumar</span>

					<img
						src='/assets/truckDetailsSlideWindow/Chat.png'
						alt=''
						className='img-fluid mx-4'
					/>

					<img
						src='/assets/truckDetailsSlideWindow/phone.png'
						alt=''
						className='img-fluid'
					/>
				</div>
			</div>
		</motion.div>
	);
}
