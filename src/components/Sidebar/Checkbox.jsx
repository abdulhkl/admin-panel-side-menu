import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import AnimalContext from '../../context/AnimalContext';
import styles from './Checkbox.module.css';
const Checkbox = ({ item, level }) => {
	const [isChecked, setIsChecked] = useState(true);
	const [key, setKey] = useState('');
	const onChange = (key) => {
		setIsChecked((prev) => !prev);
		setKey(key);
	};
	const { onFilterAnimals } = useContext(AnimalContext);

	useEffect(() => {
		onFilterAnimals(key, isChecked, level);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isChecked, key, level]);

	return (
		<div className={styles['checkbox-wrapper']}>
			<label>
				<input
					type='checkbox'
					checked={isChecked}
					value={item.key}
					className={`${
						isChecked ? [styles['checked'], ['bi'], ['bi-alarm']].join(' ') : ''
					}`}
					onChange={() => onChange(item.key)}
				/>
				<span>{item.label}</span>
			</label>
		</div>
	);
};

Checkbox.propTypes = {
	item: PropTypes.object.isRequired,
};

export default Checkbox;
