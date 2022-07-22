import React from "react";
import {
	DateInputs,
	NormalInputs,
	SelectInputs,
} from "../../ModularComponents/Inputs/Inputs";
import "./TruckBasicDetails.css";

export default function TruckBasicDetails() {
	return (
		<div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<SelectInputs
						data={[
							{
								name: "Hindi",
							},
						]}
						required={true}
						placeholder='company Name'
						label='company Name'
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
						placeholder='Client Name'
						label='Client Name'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-1 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Registration Number'
						label='Registration Number'
						onBlur={() => {}}
					/>
				</div>
			</div>

			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Make'
						label='Make'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Model'
						label='Model'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Load capacity'
						label='Load capacity (in tons)'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<DateInputs
						type='date'
						required={true}
						placeholder='Date of Birth'
						label='Date of Birth'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={false}
						placeholder='Class'
						label='Class'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<NormalInputs
						required={false}
						placeholder='Unladen Weight'
						label='Unladen Weight'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={false}
						placeholder='Chasis Number'
						label='Chasis Number'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<NormalInputs
						required={false}
						placeholder='Engine number'
						label='Engine number'
						onBlur={() => {}}
					/>
				</div>
			</div>
		</div>
	);
}
