import { useState } from 'react';
import './cells.css';

export const Cells = () => {
	const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
	const onMouseOver = () => {
		setIsMouseOver((prevState) => !prevState);
	};

	return (
		<div
			onMouseOver={onMouseOver}
			className={isMouseOver ? 'active' : 'cell'}
		/>
	);
}
