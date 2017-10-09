import { axios } from 'utils';
import { constants } from 'resources';

export default function examplePostService(value) {
  const params = new FormData();
  params.append('key', value);

  return axios.post(constants.EXAMPLE_SERVICE, params);
}
