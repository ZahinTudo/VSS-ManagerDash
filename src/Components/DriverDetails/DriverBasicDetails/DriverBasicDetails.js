import React from "react";
import {
	DateInputs,
	NormalInputs,
	SelectInputs,
} from "../../ModularComponents/Inputs/Inputs";
import UploadInput from "../../ModularComponents/UploadInput/UploadInput";
import "./DriverBasicDetails.css";
export default function DriverBasicDetails() {
	return (
		<div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='First Name'
						label='First Name'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Last Name'
						label='Last Name'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<DateInputs
						type='date'
						required={true}
						placeholder='Birth date'
						label='Date of Birth'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Phone Number'
						label='Phone Number'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-1 my-3'>
				<div className='col d-flex align-items-center'>
					<span className='me-4 genderLabel'>
						Gender <span className='text-danger'>*</span>
					</span>
					<div className=' d-flex'>
						<div
							data-gender='male'
							className='me-3 btn genderRadioBtn active'>
							<input
								type='radio'
								value='male'
								name='gender'
								hidden
							/>
							<div>Male</div>
						</div>
						<div
							data-gender='female'
							className='me-3 btn genderRadioBtn'>
							<input
								value='female'
								type='radio'
								name='gender'
								hidden
							/>
							<div>female</div>
						</div>
						<div
							data-gender='other'
							className='me-3 btn genderRadioBtn'>
							<input
								value='other'
								type='radio'
								name='gender'
								hidden
							/>
							<div>other</div>
						</div>
					</div>
				</div>
			</div>

			<div className='row row-cols-1 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Address Line 1'
						label='Enter your address '
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='City'
						label='City'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='State'
						label='State'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Pincode'
						label='Pincode'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<SelectInputs
						data={[
							{
								name: "Hindi",
							},
						]}
						required={true}
						placeholder='Preferred Language'
						label='Preferred Language'
						onBlur={() => {}}
					/>
				</div>
			</div>
		</div>
	);
}
