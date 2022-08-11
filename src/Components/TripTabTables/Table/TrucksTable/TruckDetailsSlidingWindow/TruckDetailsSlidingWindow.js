import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TruckDetailsSlidingWindow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import SlideWindow from "../../../../TripSidebarAndSlide/SlideWindow/SlideWindow";

export default function TruckDetailsSlidingWindow({ TruckDetailsAnimation }) {
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
			Truck Details
			<span onClick={handleClose}>&times;</span>
		</motion.div>
	);
}
