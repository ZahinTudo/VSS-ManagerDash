import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
	// ====================================
	const [prevId, setPrevId] = useState(0);
	const selectMarkerBox = (index) => {
		const prev = document.querySelector(
			`[data-markerId=${"markerbox-" + prevId}]`
		);
		prev.classList.remove("active");

		const current = document.querySelector(
			`[data-markerId=${"markerbox-" + index}]`
		);
		current.classList.add("active");
		setPrevId(index);
	};
	return (
		<div className='sidebar py-3'>
			<p className='sidebar-title'>Trips</p>
			<div
				className='markerWrapper'
				style={{ flex: 1, overflowY: "scroll" }}>
				{[1, 2, 3, 4].map((item, index) => (
					<div
						data-markerId={"markerbox-" + index}
						onClick={(e) => selectMarkerBox(index)}
						className={`markerBox ${index === 0 ? "active" : ""}`}
						key={index}>
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
										UP 01 AP 1345
									</span>
									<span className='truckCompany'>
										VN Cosmetics
									</span>
									<span className='truckRoute'>
										Mumbai-Kerala via Pune
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
								<span>
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
		</div>
	);
}
