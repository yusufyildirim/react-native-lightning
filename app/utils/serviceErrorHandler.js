import loading from './loading';
import flows from '../flows';

function handle401({ data: { message } }) {
  flows.logout();
}
/* *************** */

async function handleServiceErrorByCode(error) {
  const { code, config } = error;

  switch (code) {
    case 'ECONNABORTED':
      // Connection Timeout
      break;

    default:
      break;
  }

  return Promise.reject(error);
}

function handleServiceErrorByStatusCode(error) {
  const { response } = error;
  switch (response.status) {
    case 401:
      // Token not provided or expired
      handle401(response);
      break;

    default:
      break;
  }

  return Promise.reject(error);
}

// Main Handler
export default function serviceError(error) {
  const { code, response } = error;
  loading.hide();

  if (code) {
    // If network or device based error occurs
    return handleServiceErrorByCode(error);
  } else if (response) {
    // If server responds
    return handleServiceErrorByStatusCode(error);
  }

  // Just in case...
  return Promise.reject(error);
}
