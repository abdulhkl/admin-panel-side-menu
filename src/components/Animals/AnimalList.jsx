import { useContext } from 'react';
import Animal from './Animal';
import styles from './AnimalList.module.css';
import AnimalContext from '../../context/AnimalContext';
function AnimalList() {
	const { animals } = useContext(AnimalContext);
	return (
		<ul className={styles.animals}>
			{animals.map((animal) => (
				<Animal key={animal.id} animal={animal} />
			))}
		</ul>
	);
}

export default AnimalList;
