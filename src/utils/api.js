class Api {
  constructor(options) {
    this._BaseUrl = options.BaseUrl;
  }

  getCards() {
    return fetch(`${this._BaseUrl}`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(this._checkAnswer);
  }

  _checkAnswer(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}, ${res.statusText}`);
    }
  }
}

const api = new Api({
  BaseUrl: "https://api.thecatapi.com/v1/images/search?limit=10",
});

export { api };
