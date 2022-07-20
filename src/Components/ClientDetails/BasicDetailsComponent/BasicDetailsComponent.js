import React from "react";
import {
	NormalInputs,
	SelectInputs,
} from "../../ModularComponents/Inputs/Inputs";
import UploadInput from "../../ModularComponents/UploadInput/UploadInput";
import "./BasicDetailsComponent.css";

export default function BasicDetailsComponent() {
	return (
		<div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<SelectInputs
						data={[
							{
								name: "saman",
							},
						]}
						required={true}
						placeholder='Company Name'
						label='Truck Company'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Client Name'
						label='Client Name'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Phone Number'
						label='Phone Number'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Contact Person'
						label='Contact person'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-1 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Registration Number'
						label='Business Registration Number'
						onBlur={() => {}}
					/>
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
					<UploadInput />
				</div>
			</div>
		</div>
	);
}
