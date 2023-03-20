import { createContext, useState } from 'react';

const AnimalContext = createContext();

const ANIMALS = [
	{
		id: 1,
		key: 'dog',
		label: 'Dog',
		mainCategory: 'mammal',
		subCategory: 'canidae',
		image:
			'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 2,
		key: 'fox',
		label: 'Fox',
		mainCategory: 'mammal',
		subCategory: 'canidae',
		image:
			'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 3,
		key: 'wolf',
		label: 'Wolf',
		mainCategory: 'mammal',
		subCategory: 'canidae',
		image:
			'https://images.unsplash.com/photo-1607350999170-b893fef057ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 4,
		key: 'lizard',
		label: 'Lizard',
		mainCategory: 'reptile',
		subCategory: 'squamata',
		image:
			'https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGxpemFyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 5,
		key: 'snake',
		label: 'Snake',
		mainCategory: 'reptile',
		subCategory: 'squamata',
		image:
			'https://images.unsplash.com/photo-1633100982582-fe24f8b4d51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHNuYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
	},
	{
		id: 6,
		key: 'gekko',
		label: 'Gekko',
		mainCategory: 'reptile',
		subCategory: 'squamata',
		image:
			'https://images.unsplash.com/photo-1441098927400-e75b83539654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2Vra298ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
	},
];

export const AnimalProvider = ({ children }) => {
	const [animals, setAnimals] = useState(ANIMALS);

	const onFilterAnimals = (key, isChecked, level) => {
		if (level === 3 && !isChecked) {
			const updatedAnimals = animals.filter((animal) => animal.key !== key);
			setAnimals(updatedAnimals);
		}

		if (level === 3 && isChecked) {
			const addAnimal = ANIMALS.find((animal) => animal.key === key);
			addAnimal &&
				setAnimals((prv) => {
					return [addAnimal, ...prv];
				});
		}
	};

	return (
		<AnimalContext.Provider value={{ animals, onFilterAnimals }}>
			{children}
		</AnimalContext.Provider>
	);
};

export default AnimalContext;
