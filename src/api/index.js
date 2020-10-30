export function login(user) {
  return fetch("http://localhost:5000/login", {
    method: "POST",
    body: JSON.stringify({
      username: user.name,
      password: user.password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
}

export function register(user) {
  fetch("http://localhost:5000/register", {
    method: "POST",
    body: JSON.stringify({
      name: user.name,
      lastname: user.lastname,
      birth_date: user.birth_date,
      email: user.email,
      username: user.username,
      password: user.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
