import { PlayLevel } from 'components/content/type';
import { TYPE_GAME } from 'constants/typeOfGame';

const {easy, normal, hard} = TYPE_GAME;

export const getLevelOfGame = (type: PlayLevel) => {
	if (type === normal.name) {
		return normal.field;
	} else if (type === hard.name) {
		return hard.field;
	}
	return easy.field;
}
