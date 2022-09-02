import { ChangeEvent } from 'react';

export interface SelectProps {
	selectedLevel: 'Easy' | 'Normal' | 'Hard';
	changeLevelInGame: (e: ChangeEvent<HTMLSelectElement>) => void;
	onClick: () => void;
}
