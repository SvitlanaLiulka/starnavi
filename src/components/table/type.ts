export interface TableProps {
	row: number;
	column: number;
	getIndexColAndRow: (row: number, col: number) => void;
}
