import React, {useState} from 'react';
import './style.css';

const Komponenta = () => {

	const [name, setName] = useState('Erika');
	const [souhlas, setSouhlas] = useState(false);

	// const handleChange = (event) => {
	// 	// console.log('zmena v policku');
	// 	// console.log(event.target.value);
	// 	setName(event.target.value);
	// }

	return (
		<div className="komponenta">
			<h3>Komponenta</h3>
			<input type="text" value={name} onChange={(event) => {setName(event.target.value)}} />

			<p>Jméno je <strong>{name}</strong></p>

			{ name.length < 5 && <p>Jmeno musi mit nejmene 5 pismen</p> }


			<hr />

			<label>
				<input
					type="checkbox"
					checked={souhlas}
					onChange={(event) => { setSouhlas(event.target.checked) }}
				/>
				Souhlasim s podminkami
			</label>
			<button disabled={!souhlas}>Objednat</button>
		</div>
	)
}

export default Komponenta;
