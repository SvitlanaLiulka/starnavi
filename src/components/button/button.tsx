import { ButtonProps } from './type';
import './button.css';

export const Button = ({ onClick, children }: ButtonProps) => (
	<>
		<button className='start' onClick={onClick} children={children}/>
	</>
);

export default Button;
