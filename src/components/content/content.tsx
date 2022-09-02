import {ChangeEvent, useEffect, useState} from 'react';
import { Select } from 'components/select/select';
import { Table } from 'components/table/table';
import { getLevelOfGame } from 'utils/typeOfApp';
import { MouseOverCells, PlayLevel } from './type';
import './content.css';

const Content = () => {
	const [selectedLevelPlay, setSelectedLevelPlay] = useState<PlayLevel>('Easy');
	const [isGameStart, setGameStart] = useState<boolean>(false);
	const [mouseOverCells, setMouseOverCells] = useState<MouseOverCells[]>([]);

	const getIndexColAndRow = (hoveredRow: number, hoveredCol: number) => {
		const newMouseOverCells = {row: hoveredRow, col: hoveredCol, id: `${hoveredRow}${hoveredCol}`};
		if (mouseOverCells.some(({row, col}) => row === hoveredRow && col === hoveredCol)) {
			return setMouseOverCells(mouseOverCells.filter(({id}) => id !== `${hoveredRow}${hoveredCol}`));
		}
		return setMouseOverCells((prevState) => [...prevState, newMouseOverCells]);
	}

	const changeLevelInGame = (e: ChangeEvent<HTMLSelectElement>) => {
		setGameStart(false)
		setSelectedLevelPlay(e.target.value as PlayLevel);
	};

	useEffect(() => {
		setMouseOverCells([]);
	}, [selectedLevelPlay])

	return (
		<div className='content-wrap'>
			<p className='content-title'>Select Level Game</p>
			<Select
				selectedLevel={selectedLevelPlay}
				changeLevelInGame={changeLevelInGame}
				onClick={() => setGameStart(true)}
			/>
			<div className='content'>
				{isGameStart &&
          <Table
            row={getLevelOfGame(selectedLevelPlay)}
            column={getLevelOfGame(selectedLevelPlay)}
            getIndexColAndRow={getIndexColAndRow}
          />
				}
				<ul className='hovered-list' key={new Date().getUTCMilliseconds()}>
					{isGameStart && mouseOverCells.map(({row, col, id}) => (
						<li key={id} className='list-col-row'>row: {row} col: {col}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Content;
