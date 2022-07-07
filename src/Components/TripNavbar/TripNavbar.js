import { faAngleDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./TripNavbar.css";

export default function TripNavbar() {
	const [PrevActiveNav, setPrevActiveNav] = useState("dash");
	const navClick = (e) => {
		const prev = document.querySelector(`[data-link=${PrevActiveNav}]`);
		prev.classList.remove("active");
		const current = e.currentTarget;
		current.classList.add("active");
		setPrevActiveNav(current.dataset.link);
	};
	return (
		<div className='tripNavbar'>
			<div className='nav-left'>
				<div className='logo'>
					<img
						src='/assets/navlogo.png'
						className='img-fluid'
						alt=''
						srcset=''
					/>
				</div>
				<div className='nav-items'>
					<div
						data-link='dash'
						onClick={navClick}
						className='nav-links active'>
						<span className='nav-link-icon'>
							<img
								src='/assets/dashIcon.svg'
								alt=''
								className='img-fluid'
							/>
						</span>
						<span className='text-uppercase'>Dashboard</span>
					</div>
					<div
						onClick={navClick}
						data-link='trucks'
						className='nav-links'>
						<span className='nav-link-icon'>
							<img
								src='/assets/truckIcon.svg'
								alt=''
								className='img-fluid'
							/>
						</span>
						<span className='text-uppercase'>Trucks</span>
					</div>
					<div
						onClick={navClick}
						data-link='drivers'
						className='nav-links'>
						<span className='nav-link-icon'>
							<img
								src='/assets/driverIcon.svg'
								alt=''
								className='img-fluid'
							/>
						</span>
						<span className='text-uppercase'>Drivers</span>
					</div>
					<div
						onClick={navClick}
						data-link='clients'
						className='nav-links'>
						<span className='nav-link-icon'>
							<img
								src='/assets/client.svg'
								alt=''
								className='img-fluid'
							/>
						</span>
						<span className='text-uppercase'>Clients</span>
					</div>
				</div>
			</div>
			<div className='nav-right'>
				<div className='sosNotify'>
					<div className='sosBtn'>
						<img src='/assets/sosRed.png' alt='' />
					</div>
					<div className='sosNotiNo'>
						<span>+2</span>
					</div>
				</div>
				<div className='planTripBtn'>
					<span
						className='text-capitalize'
						style={{ whiteSpace: "nowrap" }}>
						plan trip{" "}
					</span>
					<FontAwesomeIcon icon={faPlus} />
				</div>
				<div className='d-flex align-items-center'>
					<div className='userIcon'>
						<img
							className='img-fluid'
							src='/assets/userIcon.png'
							alt=''
							srcset=''
						/>
					</div>
					<span className='userName' style={{ whiteSpace: "nowrap" }}>
						Hi! anubhav
					</span>
					<span>
						<FontAwesomeIcon icon={faAngleDown} />
					</span>
				</div>
			</div>
		</div>
	);
}
