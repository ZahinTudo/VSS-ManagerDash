import React from "react";
import "./DriverTable.css";
import {
	faCommenting,
	faMapMarkerAlt,
	faPencil,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function DriverTable({ item, id }) {
	return (
		<tr>
			<td style={{ verticalAlign: "middle" }}>
				<input
					className='largerCheckbox'
					type='checkbox'
					name=''
					id={id}
				/>
			</td>
			{Object.entries(item).map(([key, value], index) => (
				<td key={index} style={{ verticalAlign: "middle" }}>
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
	);
}
