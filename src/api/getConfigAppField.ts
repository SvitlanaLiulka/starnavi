import axios from 'axios';
import { URL_FOR_API } from 'constants/urlForAPI';
import { AppFieldData } from './type';

export const getConfigAppField = async (): Promise<AppFieldData[]> => {
	try {
		const configAPI = await axios.get(URL_FOR_API);
		return configAPI.data;
	} catch ({status, message}) {
		if (status !== 200) {
			throw Error(`Something was wrong ${message}`);
		}
	}

	return [];
};
