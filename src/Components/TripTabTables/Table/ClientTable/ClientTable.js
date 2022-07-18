import React from "react";
import "./ClientTable.css";
import {
	faCommenting,
	faMapMarkerAlt,
	faPencil,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
export default function ClientTable({ activeTrip }) {
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
							<td key={index} style={{ verticalAlign: "middle" }}>
								<span className='d-flex align-items-center'>
									{(function () {
										switch (key) {
											case "State & City":
												return (
													<div className='d-flex flex-column'>
														<span>
															{value.state}
														</span>
														<span>
															{value.city}
														</span>
													</div>
												);
											case "Client Company":
												return <a href=''> {value}</a>;

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
