import React from "react";
import {
	DateInputs,
	NormalInputs,
	SelectInputs,
} from "../../ModularComponents/Inputs/Inputs";
import UploadInput from "../../ModularComponents/UploadInput/UploadInput";
import "./TrucksPermits.css";
export default function TrucksPermits() {
	return (
		<div>
			<div>
				<div>
					<label htmlFor=''>Permits</label>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<NormalInputs
							required={false}
							placeholder='Permit Number'
							label='Permit Number'
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<NormalInputs
							required={false}
							placeholder='Permit Holder Name'
							label='Permit Holder Name'
							onBlur={() => {}}
						/>
					</div>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<UploadInput label='Valid From' required={true} />
					</div>
					<div className='col'>
						<UploadInput label='Valid till' required={true} />
					</div>
				</div>
				<div className='row row-cols-1 mb-2'>
					<div className='col'>
						<NormalInputs
							required={true}
							placeholder='Address'
							label='Address'
							onBlur={() => {}}
						/>
					</div>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<NormalInputs
							required={true}
							placeholder='Permit Holder Name'
							label='Permit Holder Name'
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<UploadInput label='Upload Permit' required={true} />
					</div>
				</div>
			</div>
		</div>
	);
}
