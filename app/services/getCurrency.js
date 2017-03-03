import { REST } from 'lib';
import { constants } from 'resources';

function getCurrency(screen) {
  return new Promise((resolve, reject) => {
    const rest = new REST(screen);

    rest.setServiceUrl(`${constants.serviceDefaultUrl}/latest`);
    rest.setParams({ base: 'USD' });
    rest.setHeader({ Accept: 'application/json', 'Content-Type': 'application/json' });

    rest
      .get()
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = getCurrency;
