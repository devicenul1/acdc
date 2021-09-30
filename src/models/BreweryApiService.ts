import axios, { AxiosResponse } from 'axios';
import iBrewery from 'interfaces/iBrewery';

const instance = axios.create({
    baseURL: process.env.REACT_APP_OPEN_BREWERY_DB_BASE_URL
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
	put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	delete: (url: string) => instance.delete(url).then(responseBody),
};

export const Breweries = {
    getBreweries: (): Promise<iBrewery[]> => requests.get('breweries'),
    getBreweriesByCity: (city: string): Promise<iBrewery[]> => requests.get(`breweries?by_city=${city}`),
    getBrewery: (id: number): Promise<iBrewery> =>requests.get(`breweries/${id}`)
};
