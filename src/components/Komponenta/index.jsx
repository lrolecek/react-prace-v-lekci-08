import React, {useState} from 'react';
import './style.css';

const Komponenta = () => {

	const [name, setName] = useState('');

	const handleChange = (event) => {
		// console.log('zmena v policku');
		// console.log(event.target.value);
		setName(event.target.value);
	}

	return (
		<div className="komponenta">
			<h3>Komponenta</h3>
			<input type="text" onChange={handleChange} />

			<p>Jméno je <strong>{name}</strong></p>
		</div>
	)
}

export default Komponenta;
