import React from 'react';

const SelectionDescription = (props) => {
	const { title, text } = props.description;
	return ( 
		<div class="selection-description">
			<div class="selection-description-title">
				<h1>{title}</h1>
			</div>
			<div>
				<p>
					{text}
				</p>
			</div>
		</div>
	);
}

export default SelectionDescription;