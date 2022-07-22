import React from "react";
import {
	DateInputs,
	NormalInputs,
	SelectInputs,
} from "../../ModularComponents/Inputs/Inputs";
import UploadInput from "../../ModularComponents/UploadInput/UploadInput";

export default function TrucksUploadDocuments() {
	return (
		<div>
			<div>
				<div>
					<label htmlFor=''>Registration Certificate</label>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<SelectInputs
							data={[
								{
									name: "Karnataka",
								},
							]}
							required={true}
							placeholder='Registered City'
							label='Registered state'
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
					<label htmlFor=''>Insurance details</label>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<DateInputs
							type='date'
							required={false}
							placeholder='DD/MM/YYYY'
							label='Valid From'
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<DateInputs
							type='date'
							required={false}
							placeholder='DD/MM/YYYY'
							label='Valid Till'
							onBlur={() => {}}
						/>
					</div>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<NormalInputs
							required={false}
							placeholder='Insurance provider'
							label='Insurance provider'
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<UploadInput
							label='Insurance Document'
							required={false}
						/>
					</div>
				</div>
			</div>
			<div>
				<div>
					<label htmlFor=''>Emission Test</label>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<DateInputs
							type='date'
							required={false}
							placeholder='DD/MM/YYYY'
							label='Valid From'
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<DateInputs
							type='date'
							required={false}
							placeholder='DD/MM/YYYY'
							label='Valid Till'
							onBlur={() => {}}
						/>
					</div>
				</div>
				<div className='row row-cols-2 mb-2'>
					<div className='col'>
						<NormalInputs
							required={false}
							placeholder='Test Centre'
							label='Test Centre'
							onBlur={() => {}}
						/>
					</div>
					<div className='col'>
						<UploadInput
							label='Upload Test Report'
							required={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
