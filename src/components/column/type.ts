export interface IColumns {
	cells: number;
	getIndexColAndRow: (hoveredRow: number, hoveredCol: number) => void;
	rowIndex: number;
}
