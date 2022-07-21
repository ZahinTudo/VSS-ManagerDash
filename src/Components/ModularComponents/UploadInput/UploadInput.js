import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Form } from "react-bootstrap";
import "./UploadInput.css";
export default function UploadInput({
	label,
	required,
	onChange,
	placeholder,
	type,
}) {
	const uploadHandle = () => {
		document.querySelector("#uploadFile").click();
	};
	const fileUpload = ({ target }) => {
		const file = target.files[0];
		console.log(file, file.name);
		const fileNameField = document.querySelector(".fileName");
		fileNameField.innerHTML = file.name;
		// disable(false);
	};
	return (
		<div className='uploadingWrapper d-flex w-100 align-items-center justify-content-center'>
			<Form.Group className=' w-100' controlId='upload'>
				<Form.Label className={required ? "required" : ""}>
					{label}
				</Form.Label>
				<div className='position-relative'>
					<div
						className='border d-flex align-items-center uploadField'
						style={{
							overflowX: "scroll",
							overflowY: "hidden",
							borderRadius: "5px",
							height: "42px",
							padding: "5px 5px",
						}}>
						<div
							className='border d-flex align-items-center py-1 px-2'
							style={{
								cursor: "pointer",
								borderRadius: "5px",
								minWidth: "max-content",
								whiteSpace: "nowrap",
							}}
							onClick={uploadHandle}>
							<input
								onChange={fileUpload}
								hidden
								className=''
								id='uploadFile'
								style={{ width: "0" }}
								type='file'
								name=''
							/>
							<img
								src='/assets/upload.png'
								alt=''
								className='img-fluid'
							/>
							<span className='ms-2'>Choose file</span>
						</div>
						<span className='ms-2 fileName'></span>
					</div>
				</div>
			</Form.Group>
		</div>
	);
}
