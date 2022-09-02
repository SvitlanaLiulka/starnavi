import { Cells } from 'components/cells/cells';
import { fillArrayByNumber } from 'utils/fillArrayByNumber';
import { IColumns } from './type';

export const Columns = ({ cells, getIndexColAndRow, rowIndex }: IColumns) => {
	const columns = fillArrayByNumber(cells);

	return (
		<>
			{columns.map((_, index) => (
				<td
					onMouseEnter={() => getIndexColAndRow(rowIndex + 1, index + 1)}
			    key={index}
				>
			    <Cells/>
				</td>
			))}
		</>
	);
}
