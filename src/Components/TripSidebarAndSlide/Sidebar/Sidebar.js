import React, { useState } from "react";
import "./Sidebar.css";

import SlidingBar from "../SlidingBar/SlidingBar";
import { useSelector } from "react-redux";
import { useAnimation } from "framer-motion";
export default function Sidebar() {
	const { allMarkers } = useSelector((state) => state.allMarkers);
	const [currentId, setCurrentId] = useState(null);
	const [prevActiveId, setPrevActiveId] = useState(null);

	const { MapRef } = useSelector((state) => state.MapRef);

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
			<SlidingBar
				controlAnimation={controlAnimation}
				slidebarClose={slidebarClose}
				currentId={currentId}
			/>
		</div>
	);
}
