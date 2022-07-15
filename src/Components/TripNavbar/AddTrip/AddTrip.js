import React from "react";
import "./AddTrip.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimes,
	faAngleLeft,
	faAngleRight,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
export default function AddTrip({ addTripAnimation }) {
	const handleCloseAddTrip = () => {
		addTripAnimation.start({
			width: 0,
			x: 500,
			opacity: 0,
			transition: {
				duration: 0.15,
			},
		});
	};
	return (
		<motion.div
			className='addTrip'
			style={{ zIndex: 600 }}
			initial={{ width: 0, x: 500, opacity: 0 }}
			animate={addTripAnimation}>
			<div className=''>
				<div className='headNav d-flex align-items-center justify-content-between'>
					<span className='title'>Add Trip</span>
					<div
						className='d-flex align-items-center justify-content-between'
						style={{ width: "45%" }}>
						<span className='PrevNextBtn d-flex align-items-center'>
							<span className='me-1 d-flex align-items-center'>
								<FontAwesomeIcon icon={faAngleLeft} />
							</span>
							<span>Prev</span>
						</span>
						<span className='PrevNextBtn d-flex align-items-center'>
							<span className='me-1'>Next</span>
							<span className='d-flex align-items-center'>
								<FontAwesomeIcon icon={faAngleRight} />
							</span>
						</span>
						<span
							style={{ cursor: "pointer" }}
							onClick={handleCloseAddTrip}
							className='CloseBtn'>
							<FontAwesomeIcon icon={faTimes} />
						</span>
					</div>
				</div>
				<div className='tabControl d-flex '>
					<div className='me-3 active'>
						<div className='circle me-2'>1</div>
						<span>Trip details</span>
					</div>
					<div>
						<div className='circle me-2'>2</div>
						<span>Route details</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
