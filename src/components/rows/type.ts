export interface RowsProps {
	row: number;
	column: number;
	getIndexColAndRow: (hoveredRow: number, hoveredCol: number) => void;
}
