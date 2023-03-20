import PropTypes from 'prop-types';
import Card from '../UI/Card';
import styles from './Animal.module.css';
const Animal = ({ animal }) => {
	return (
		<li key={animal.id} className={styles.animal}>
			<Card>
				<img alt={animal.label} src={animal.image} />
				<div className={styles['animal-details']}>
					<header>{animal.label}</header>
					<div className={styles.category}>{animal.mainCategory}</div>
				</div>
			</Card>
		</li>
	);
};

Animal.propTypes = {
	animal: PropTypes.object.isRequired,
};

export default Animal;
