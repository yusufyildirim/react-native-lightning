import REST from 'lib/REST';
import { serviceDefaultUrl } from 'resources/constants';

function getCurrency(screen) {
  return new Promise((resolve, reject) => {
    let rest = new REST(screen);
    
    rest.setServiceUrl(serviceDefaultUrl + '/latest')
    rest.setParams({ 'base': 'USD' })
    rest.setHeader({ 'Accept': "application/json", 'Content-Type': 'application/json' })

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
