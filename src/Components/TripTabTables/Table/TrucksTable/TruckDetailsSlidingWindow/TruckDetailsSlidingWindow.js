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
			className='permitSlider'
			initial={{
				x: 700,
			}}
			animate={TruckDetailsAnimation}>
			<div>
				<div className='d-flex flex-column align-items-center justify-content-center'>
					{truckDetails?.["Truck Details"].License}
				</div>
			</div>
		</motion.div>
	);
}
