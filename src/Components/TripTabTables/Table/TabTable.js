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

export default function TabTable() {
	const [activeTrip, setActiveTrip] = useState(null);
	useEffect(() => {
		// axios.get("/ActiveTable.json").then((res) => console.log(res.data));

		fetch("/jsonviewer.json")
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((result) => {
				console.log(result);
				setActiveTrip(result);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<Table responsive borderless size='lg'>
			<thead>
				<tr>
					<th>
						<input type='checkbox' name='' id='' />
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
							<input type='checkbox' name='' id={index} />
						</td>
						{Object.entries(item).map(([key, value], index) => (
							<td key={index} style={{ verticalAlign: "middle" }}>
								<span className='d-flex align-items-center'>
									{key == "Driver Name" ? (
										<img
											alt=''
											src='/assests/user.png'
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
							style={{ verticalAlign: "middle" }}
							className='d-flex align-items-center text-dark'>
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
									src='/assests/sosIcon.svg'
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
