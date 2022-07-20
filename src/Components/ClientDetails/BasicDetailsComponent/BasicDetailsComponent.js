import React from "react";
import { SelectInputs } from "../../ModularComponents/Inputs/Inputs";
import "./BasicDetailsComponent.css";

export default function BasicDetailsComponent() {
	return (
		<div>
			<div className='d-flex'>
				<div className='col'>
					<SelectInputs
						data={[
							{
								name: "saman",
							},
						]}
						required={true}
						placeholder='select client'
						label='Truck Company'
						onBlur={() => {}}
					/>
				</div>
			</div>
		</div>
	);
}
