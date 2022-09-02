import { Rows } from 'components/rows/rows';
import { TableProps } from './type';
import './table.css';

export const Table = ({ row, column, getIndexColAndRow }: TableProps) => (
	<>
		<table className='table'>
			<tbody>
			  <Rows
				  row={row}
				  column={column}
				  getIndexColAndRow={getIndexColAndRow}
			  />
			</tbody>
		</table>
	</>
)
