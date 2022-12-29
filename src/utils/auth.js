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

export const register = (name, email) => {
  return fetch(`${BASE_URL}/create_user.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email
    }),
  })
    .then(getResponseData)
    .then((data) => data);
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/validate_token.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  })
    .then(getResponseData)
    .then((data) => data);
};

export const updateUser = (name, email, password, token) => {
  return fetch(`${BASE_URL}/update_user.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      token: token,
    })
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

export const addStudent = (email, id) => {
  return fetch(`${BASE_URL}/attach_student.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      student_email: email,
      id: id
    })
  })
  .then(getResponseData)
  .then((data) => data);
}

export const deleteStudent = (studentId, id) => {
  return fetch(`${BASE_URL}/delete_student.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      student_id: studentId,
      id: id
    })
  })
  .then(getResponseData)
  .then((data) => data);
}

export const getCourses = (studentId) => {
  return fetch(`${BASE_URL}/get_courses.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid: studentId
    })
  })
  .then(getResponseData)
  .then((data) => data);
}

export const getGrades = (studentId, courseId) => {
  return fetch(`${BASE_URL}/get_grades_v2.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid : studentId,
      courseid : courseId
    })
  })
  .then(getResponseData)
  .then((data) => data);
}

export const getFiles = (studentId) => {
  return fetch(`${BASE_URL}/get_files.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid : studentId
    })
  })
  .then(getResponseData)
  .then((data) => data);
}

export const getCourseFiles = (studentId, classNum) => {
  return fetch(`${BASE_URL}/get_files.php`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userid : studentId,
      class: classNum
    })
  })
  .then(getResponseData)
  .then((data) => data);
}