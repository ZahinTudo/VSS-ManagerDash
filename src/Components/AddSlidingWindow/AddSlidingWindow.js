import React, { useState } from "react";
import "./AddSlidingWindow.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTimes,
	faAngleLeft,
	faAngleRight,
	faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs } from "react-bootstrap";
export default function AddSlidingWindow({
	AddSlidingWindowAnimation,
	title,
	components,
}) {
	const [key, setKey] = useState(1);
	const handleCloseAddSlidingWindow = () => {
		AddSlidingWindowAnimation.start({
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
			className='AddSlidingWindow'
			style={{ zIndex: 600 }}
			initial={{ width: 0, x: 500, opacity: 0 }}
			animate={AddSlidingWindowAnimation}>
			<div className=''>
				<div className='headNav '>
					<div className='d-flex align-items-center justify-content-between'>
						<span className='title'>Add {title}</span>
						<span
							style={{ cursor: "pointer" }}
							onClick={handleCloseAddSlidingWindow}
							className='CloseBtn'>
							<FontAwesomeIcon icon={faTimes} />
						</span>
					</div>
					<div className='d-flex align-items-center justify-content-end mt-2'>
						<span
							onClick={() => (key !== 1 ? setKey(key - 1) : "")}
							className={`PrevNextBtn d-flex align-items-center ${
								key === 1 && "disabled"
							}`}>
							<span className='me-1 d-flex align-items-center'>
								<FontAwesomeIcon icon={faAngleLeft} />
							</span>
							<span>Previous</span>
						</span>
						<span
							onClick={() =>
								key !== components.length ? setKey(key + 1) : ""
							}
							className='ms-3 PrevNextBtn d-flex align-items-center'>
							<span className='me-1'>Next</span>
							<span className='d-flex align-items-center'>
								<FontAwesomeIcon icon={faAngleRight} />
							</span>
						</span>
					</div>
				</div>
				<div className='tabControl d-flex '>
					{components.map((item, index) => (
						<div
							style={{ cursor: "pointer" }}
							onClick={() => setKey(index + 1)}
							className={`me-3 ${item.id === key && "active"}`}>
							<div className='circle me-2'>1</div>
							<span>{item.name}</span>
						</div>
					))}
				</div>
				<Tabs
					id='addWindow'
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className='mb-3'>
					{components.map((item, index) => {
						console.log(item);
						return <Tab eventKey={index + 1}>{item.component}</Tab>;
					})}
					{/* <Tab eventKey={2}>2</Tab>
					<Tab eventKey={3}>3</Tab> */}
				</Tabs>
			</div>
		</motion.div>
	);
}
