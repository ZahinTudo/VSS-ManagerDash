import React, { useState } from "react";
import "./TrucksTable.css";
import {
	faAngleDown,
	faCommenting,
	faMapMarkerAlt,
	faPencil,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import PermitSlidingWindow from "./PermitSlidingWindow/PermitSlidingWindow";
import { useAnimation } from "framer-motion";
import TruckDetailsSlidingWindow from "./TruckDetailsSlidingWindow/TruckDetailsSlidingWindow";
export default function TrucksTable({ activeTrip }) {
	const [ClickedTruckId, setClickedTruckId] = useState(null);
	const PermitAnimatinoSlide = useAnimation();
	const handlePermitOpen = () => {
		PermitAnimatinoSlide.start({
			x: 0,
			transition: {
				duration: 0.15,
			},
		});
	};
	const TruckDetailsAnimation = useAnimation();
	const handleTruckDetailsOpen = (e) => {
		console.log(e.currentTarget.dataset.id, activeTrip);
		setClickedTruckId(e.currentTarget.dataset.id);
		TruckDetailsAnimation.start({
			x: 0,
			transition: {
				duration: 0.15,
			},
		});
	};
	const checkStateChange = (item) => {
		const target = item;
		const isChecked = JSON.parse(target.dataset.checked);
		if (!isChecked) {
			console.log(isChecked, target);
			target.setAttribute("src", "/assets/checkBoxChecked.png");
			target.dataset.checked = "true";
			return;
		}
		target.setAttribute("src", "/assets/checkBoxUnChecked.png");
		target.dataset.checked = "false";
	};
	const handleCheck = (e) => {
		const target = e.currentTarget;
		const type = target.dataset.checkbox;
		if (type === "all") {
			const allCheckBox = document.querySelectorAll(
				".individualCheckbox"
			);
			allCheckBox.forEach((item) => {
				checkStateChange(item);
			});
			return;
		}
		checkStateChange(target);
	};
	return (
		<div className=''>
			<PermitSlidingWindow PermitAnimatinoSlide={PermitAnimatinoSlide} />
			<TruckDetailsSlidingWindow
				truckDetails={activeTrip?.tableData[ClickedTruckId]}
				TruckDetailsAnimation={TruckDetailsAnimation}
			/>
			<Table responsive striped hover className='table-borderless'>
				<thead>
					<tr>
						<th>
							{/* <input
								className='largerCheckbox'
								type='checkbox'
								name=''
								id=''
							/> */}
							<span>
								<img
									onClick={handleCheck}
									data-checkbox='all'
									data-checked={false}
									src='/assets/checkBoxUnChecked.png'
									alt=''
									className='img-fluid'
								/>
							</span>
						</th>
						{activeTrip?.tableHeads.map((item, index) => (
							<th key={index}>
								<span className='me-2'>{item}</span>{" "}
								<FontAwesomeIcon icon={faAngleDown} />
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{activeTrip?.tableData.map((item, id) => (
						<tr>
							<td style={{ verticalAlign: "middle" }}>
								{/* <input
									className='largerCheckbox'
									type='checkbox'
									name=''
									id={"checkbox-" + id}
								/> */}
								<span>
									<img
										onClick={handleCheck}
										data-checkbox={id}
										data-checked={false}
										src='/assets/checkBoxUnChecked.png'
										alt=''
										className='img-fluid individualCheckbox'
									/>
								</span>
							</td>
							{Object.entries(item).map(([key, value], index) => (
								<td
									key={index}
									style={{ verticalAlign: "middle" }}>
									<span className='d-flex align-items-center'>
										{(function () {
											switch (key) {
												case "Truck Details":
													return (
														<div className='d-flex flex-column'>
															<span
																className='links'
																data-id={id}
																onClick={
																	handleTruckDetailsOpen
																}
																href='#'>
																{value.License}
															</span>
															<div className='d-inline-block mt-2'>
																{value.company}
															</div>
														</div>
													);
												case "permit":
													return (
														<>
															<span
																style={{
																	cursor: "pointer",
																}}
																onClick={
																	handlePermitOpen
																}
																className='viewPermit'>
																{value}
															</span>
														</>
													);
												case "Status":
													return (
														<>
															<span className='me-2'>
																<img
																	src={
																		value.icon
																	}
																	alt=''
																	className='img-fluid'
																/>
															</span>
															<span
																className={`${
																	value.type ==
																		"Emergency" &&
																	"text-danger"
																} ${
																	value.type ==
																		"Driving" &&
																	"text-success"
																} ${
																	value.type ==
																		"stopped" &&
																	"text-secondary"
																} ${
																	value.type ==
																		"Action Req." &&
																	"text-warning"
																}`}>
																{value.type}
															</span>
														</>
													);
												case "Registration":
													return (
														<div>
															<div className=''>
																{value.State}
															</div>
															<div>
																{value.City}
															</div>
														</div>
													);
												default:
													return value;
											}
										})()}
									</span>
								</td>
							))}

							<td
								style={{
									verticalAlign: "middle",
									width: "max-content",
									display: "table-cell",
								}}
								className='align-items-center text-dark'>
								<span className='actionIcons'>
									<img
										src='/assets/editPencil.png'
										alt=''
										className='img-fluid'
									/>
								</span>
								<span className='actionIcons'>
									<img
										src='/assets/location.png'
										alt=''
										className='img-fluid'
									/>
								</span>
								{item.Status.type == "Emergency" && (
									<span className='sosLog'>SOS LOGS</span>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}
