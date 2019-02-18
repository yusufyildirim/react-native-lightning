import { axios } from 'utils';
import { constants } from 'resources';

export default function getExample() {
  const params = { };

  return axios.get('https://jsonplaceholder.typicode.com/users', { params });
}
