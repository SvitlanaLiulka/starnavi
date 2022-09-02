import { Columns } from 'components/column/column';
import { fillArrayByNumber } from 'utils/fillArrayByNumber';
import { RowsProps } from './type';

export const Rows = ({ row, column, getIndexColAndRow }: RowsProps) => {
	const rows = fillArrayByNumber(row);

	return (
		<>
			{rows.map((_, index) => (
				<tr key={index}>
					<Columns
						cells={column}
						getIndexColAndRow={getIndexColAndRow} rowIndex={index}
					/>
				</tr>
			))}
		</>
	)
}
