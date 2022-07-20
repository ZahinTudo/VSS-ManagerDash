import React, { useState } from "react";
import "./AddTrucks.css";
import { NormalInputs } from "../../ModularComponents/Inputs/Inputs";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function AddTrucks() {
	const { allMarkers } = useSelector((state) => state.allMarkers);
	const [selected, setselected] = useState([]);
	const [vehicles, SetVehicles] = useState(allMarkers);
	const handleAdd = (index) => {
		setselected([...selected, index]);
	};
	const handleRemove = (index) => {
		// const index=selected
		console.log(index);
		const updated = selected.filter((val, id) => id != index);
		setselected(updated);
	};
	return (
		<div className='addClientTruck'>
			<div className='mb-2'>
				<input
					className='search w-100'
					style={{ borderRadius: "8px", border: "1px solid #cecece" }}
					type='text'
					placeholder='&#128269; Search'
				/>
			</div>
			<div>
				<span>{selected.length} selected</span>
			</div>
			<div className='mt-2' style={{ flex: 1, height: "100%" }}>
				{selected.map((item, index) => (
					<div
						style={{ borderBottom: "1px solid #cecece40" }}
						className='d-flex align-items-center justify-content-between'>
						<span className='title'>{vehicles[item].License}</span>
						<div className='py-3'>
							<span className='text-success me-2'>Added </span>
							<span
								style={{ cursor: "pointer" }}
								onClick={() => handleRemove(index)}>
								<FontAwesomeIcon icon={faTimes} />
							</span>
						</div>
					</div>
				))}
				{vehicles.map((item, index) => {
					if (!selected.includes(index))
						return (
							<div
								style={{ borderBottom: "1px solid #cecece40" }}
								className='d-flex align-items-center justify-content-between'>
								<span className='title'>{item.License}</span>
								<div
									className='py-3'
									style={{ cursor: "pointer" }}
									onClick={() => handleAdd(index)}>
									<FontAwesomeIcon icon={faPlus} />
								</div>
							</div>
						);
				})}
			</div>
		</div>
	);
}
