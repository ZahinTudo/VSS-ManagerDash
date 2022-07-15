import {
	faAngleDown,
	faBars,
	faMap,
	faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TripFilters.css";

export default function TripFilters() {
	return (
		<div className='tripFilters'>
			<div className='filter-left'>
				<input
					className='search'
					type='text'
					placeholder='&#128269; Search'
				/>
				<div className='d-flex align-items-center'>
					<span className='me-3'>Source</span>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<div className='d-flex align-items-center'>
					<span className='me-3'>Destination</span>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<div className='d-flex align-items-center'>
					<span className='me-3'>Client</span>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<div className='d-flex align-items-center'>
					<span className='me-3'>Zone</span>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<div className='d-flex align-items-center'>
					<span className='me-3'>Category</span>
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
				<div className='d-flex align-items-center'>
					<span className=''>
						<img
							src='/assets/filterFlag.png'
							alt=''
							className='img-fluid'
						/>
					</span>
					{/* <FontAwesomeIcon icon={faAngleDown} /> */}
				</div>
				<div className='d-flex align-items-center'>
					<FontAwesomeIcon icon={faSliders} className='me-3' />
					<span
						className='text-capitalize'
						style={{ whiteSpace: "nowrap" }}>
						More filters
					</span>
				</div>
			</div>
			{/* <div>
				<label htmlFor='email' className='d-flex flex-column'>
					Email
					<input id='email' type='text' placeholder='Email Address' />
				</label>
			</div> */}
			<div className='d-flex align-items-end'>
				{/* <div className='addDriverBtn'>
					<span className='text-capitalize'>Add driver</span>
					<img
						src='/assests/addDriver.svg'
						alt=''
						className='img-fluid'
					/>
				</div> */}
				{/* <div className='d-flex align-items-center'>
					<div className='boxIcon'>
						<FontAwesomeIcon color='white' icon={faMap} />
					</div>
					<div className='boxIcon bg-white'>
						<FontAwesomeIcon icon={faBars} />
					</div>
				</div> */}
			</div>
		</div>
	);
}
