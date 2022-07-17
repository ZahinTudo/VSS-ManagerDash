import {
	faCommenting,
	faMapMarkerAlt,
	faPencil,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./TabTable.css";

export default function TabTable({ url, type }) {
	const [activeTrip, setActiveTrip] = useState(null);
	const getData = () => {
		fetch(url)
			.then((res) => res.json())
			.then((result) => setActiveTrip(result))
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getData();
	}, []);
	if (type == "truck")
		return (
			<Table responsive hover className='table-borderless'>
				<thead>
					<tr>
						<th>
							<input
								className='largerCheckbox'
								type='checkbox'
								name=''
								id=''
							/>
						</th>
						{activeTrip?.tableHeads.map((item, index) => (
							<th key={index}>{item}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{activeTrip?.tableData.map((item, index) => (
						<tr>
							<td style={{ verticalAlign: "middle" }}>
								<input
									className='largerCheckbox'
									type='checkbox'
									name=''
									id={index}
								/>
							</td>
							{Object.entries(item).map(([key, value], index) => (
								<td
									key={index}
									style={{ verticalAlign: "middle" }}>
									<span className='d-flex align-items-center'>
										{key == "Truck Details" && (
											<div>
												<div>{value.License}</div>
												<div>{value.company}</div>
											</div>
										)}
										{key == "Status" && (
											<div>
												<span className='me-2'>
													<img
														src='/assets/drivingSignal.png'
														alt=''
														className='img-fluid'
													/>
												</span>
												<span>{value}</span>
											</div>
										)}
										{key == "Registration" && (
											<div>
												<div className=''>
													{value.State}
												</div>
												<div>{value.City}</div>
											</div>
										)}

										{(typeof value === "string" ||
											value instanceof String) &&
											value}
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
									<FontAwesomeIcon icon={faPencil} />
								</span>
								<span className='actionIcons'>
									<FontAwesomeIcon icon={faTrash} />
								</span>
								<span className='actionIcons'>
									<FontAwesomeIcon icon={faCommenting} />
								</span>
								<span className='actionIcons'>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</span>
								<span className='actionIcons'>
									<img
										src='/assets/sosIcon.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		);

	if (type == "driver")
		return (
			<Table responsive hover className='table-borderless'>
				<thead>
					<tr>
						<th>
							<input
								className='largerCheckbox'
								type='checkbox'
								name=''
								id=''
							/>
						</th>
						{activeTrip?.tableHeads.map((item, index) => (
							<th key={index}>{item}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{activeTrip?.tableData.map((item, index) => (
						<tr>
							<td style={{ verticalAlign: "middle" }}>
								<input
									className='largerCheckbox'
									type='checkbox'
									name=''
									id={index}
								/>
							</td>
							{Object.entries(item).map(([key, value], index) => (
								<td
									key={index}
									style={{ verticalAlign: "middle" }}>
									<span className='d-flex align-items-center'>
										{key == "Driver Name" ? (
											<img
												alt=''
												src='/assets/user.png'
												className='img-fluid'
											/>
										) : (
											""
										)}
										{value}
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
									<FontAwesomeIcon icon={faPencil} />
								</span>
								<span className='actionIcons'>
									<FontAwesomeIcon icon={faTrash} />
								</span>
								<span className='actionIcons'>
									<FontAwesomeIcon icon={faCommenting} />
								</span>
								<span className='actionIcons'>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
								</span>
								<span className='actionIcons'>
									<img
										src='/assets/sosIcon.svg'
										alt=''
										className='img-fluid'
									/>
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		);
}
