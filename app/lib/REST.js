import { globals } from 'stores';

class REST {
  constructor(screen = null) {
    this.screen = screen;
    this.params = {};
  }

  showLoading() {
    if (this.screen != null) {
      this.screen.setState({ loading: true });
    }
  }

  hideLoading() {
    if (this.screen != null) {
      this.screen.setState({ loading: false });
    }
  }

  doSomeWork(reqParams = {}) {
    this.showLoading();

    if (this.method === 'GET') {
      return fetch(this.serviceUrl).then(response => response.json()).then((json) => {
        this.hideLoading();
        return json;
      });
    }
    return fetch(this.serviceUrl, reqParams).then(response => response.json()).then((json) => {
      this.hideLoading();
      return json;
    });
  }

  setServiceUrl(serviceUrl) {
    this.serviceUrl = serviceUrl;
  }

  setParams(params) {
    this.params = params;
  }

  setHeader(params) {
    this.headers = params;
  }

  prepareGet() {
    const params = {
      ...globals.serviceDefaultParams,
      ...this.params,
    };

    /* Generating url with params */
    const urlExt = Object.keys(params).reduce(
      (prevVal, elem, index) => {
        const amp = index !== 0 ? '&' : '';
        const val = `${amp + elem}=${params[elem]}`;

        return prevVal + val;
      },
      '',
    );

    const urlWithParams = `${this.serviceUrl}?${urlExt}`;

    // Set New Link
    this.serviceUrl = urlWithParams;

    return this.doSomeWork();
  }

  preparePost() {
    const params = {
      ...globals.serviceDefaultParams,
      ...this.params,
    };

    const headers = {
      Authorization: `Bearer ${globals.serviceDefaultParams.token}`,
      ...this.headers,
    };

    /* var body = new FormData();

        for (var k in params) {
            body.append(k, params[k]);
        }*/

    const body = JSON.stringify(params);

    const reqContent = {
      method: this.method,
      headers,
      body,
    };

    return this.doSomeWork(reqContent);
  }

  post() {
    this.method = 'POST';

    return this.preparePost();
  }

  put() {
    this.method = 'PUT';

    return this.preparePost();
  }

  delete() {
    this.method = 'DELETE';

    return this.preparePost();
  }

  get() {
    this.method = 'GET';
    return this.prepareGet();
  }

  onError(f) {
    this.onErrorFunction = f;
  }
}

module.exports = REST;
