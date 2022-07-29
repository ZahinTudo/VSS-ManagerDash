import React from "react";
import UploadInput from "../../ModularComponents/UploadInput/UploadInput";
import {
	DateInputs,
	NormalInputs,
	SelectInputs,
} from "../../ModularComponents/Inputs/Inputs";

export default function UploadDocuments() {
	return (
		<div>
			<div>
				<div>
					<label htmlFor=''>Licence Details</label>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<NormalInputs
							required={true}
							placeholder='License Number'
							label='License Number'
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<SelectInputs
							data={[
								{
									name: "Karnataka",
								},
							]}
							required={true}
							placeholder='Registered state'
							label='Registered state'
							onBlur={() => {}}
						/>
					</div>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<UploadInput
							label='Upload front page'
							required={true}
						/>
					</div>
					<div className='col'>
						<UploadInput label='Upload Back page' required={true} />
					</div>
				</div>
			</div>
			<div>
				<div>
					<label htmlFor=''>ID Proof</label>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<SelectInputs
							data={[
								{
									name: "Aadhar Card",
								},
							]}
							required={true}
							placeholder='Proof Type'
							label='Proof Type'
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<NormalInputs
							required={true}
							placeholder='ID number'
							label='ID number'
							onBlur={() => {}}
						/>
					</div>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<UploadInput
							label='Upload front page'
							required={true}
						/>
					</div>
					<div className='col'>
						<UploadInput label='Upload Back page' required={true} />
					</div>
				</div>
			</div>
			<div>
				<div>
					<label htmlFor=''>Health Proof</label>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<SelectInputs
							data={[
								{
									name: "B+ve",
								},
							]}
							required={true}
							placeholder='Blood Group'
							label='Blood Group '
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<DateInputs
							type='datetime-local'
							required={true}
							placeholder='DD/MM/YYYY'
							label='Last check up Date'
							onBlur={() => {}}
						/>
					</div>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<UploadInput label='Upload Document' required={true} />
					</div>
				</div>
			</div>
		</div>
	);
}
