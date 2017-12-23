import { axios } from 'utils';
import { constants } from 'resources';

export default function exampleGetService(value) {
  const params = {
    key: value,
  };

  return axios.get(constants.EXAMPLE_SERVICE, { params });
}
