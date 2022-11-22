export const BASE_URL = "https://hssc-exam.ru/cabinet/api";

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}


export const login = (email, password) => {
  return fetch(`${BASE_URL}/login.php`, {
    method: "POST",
    mode: 'no-cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then(getResponseData)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return;
      }
    });
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/validate_token.php`, {
      method: "POST",
      mode: 'no-cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(getResponseData)
      .then((data) => data);
  };

  export const updateUser = (name, email, token) => {
    return fetch(`${BASE_URL}/update_user.php`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(getResponseData)
      .then((data) => data);
  };
