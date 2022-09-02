import { useEffect, useState } from 'react';
import Button from 'components/button/button';
import { SelectProps } from './type';
import { getConfigAppField } from 'api/getConfigAppField';
import './select.css';

export const Select = ({ selectedLevel, changeLevelInGame, onClick }: SelectProps) => {
  const [options, setOption] = useState<string[]>([]);

  useEffect(() => {
    getConfigAppField().then((res) => {
      setOption(res.map(({ name }) => name));
    });
  }, []);

  return (
    <div className="select-container">
      <select
        className='select'
        value={selectedLevel}
        onChange={changeLevelInGame}
        >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
        <Button onClick={onClick} children="Start" />
    </div>
  );
}
