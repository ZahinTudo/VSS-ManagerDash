import React from "react";
import {
	DateInputs,
	NormalInputs,
	SelectInputs,
} from "../../ModularComponents/Inputs/Inputs";
import "./DriverBankDetails.css";
export default function DriverBankDetails() {
	return (
		<div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Account Holder Name'
						label='Account Holder Name'
						onBlur={() => {}}
					/>
				</div>
				<div className='col'>
					<SelectInputs
						data={[
							{
								name: "ISBC Bank",
							},
						]}
						required={true}
						placeholder='Bank Name'
						label='Bank Name'
						onBlur={() => {}}
					/>
				</div>
			</div>
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='IFSC Code'
						label='Phone Number'
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
			<div className='row row-cols-2 mb-2'>
				<div className='col'>
					<NormalInputs
						required={true}
						placeholder='Account Number'
						label='Account Number'
						onBlur={() => {}}
					/>
				</div>
			</div>
		</div>
	);
}
