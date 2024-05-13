let token/*= "78c0b8dcb8dg84d4asc8ccccbc6g5g5k5o6g37k3cc3bo3c83d03bo3c4" ;*/
export async function GetAllTasks({user}) {
  console.log(user)
  token = user.token
  console.log(token)
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Нет авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function LoginApi({ login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login",
   {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 401) {
    throw new Error("Нет авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function RegistrationApi({ login, name, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", 
  {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });
  if (response.status === 401) {
    throw new Error("Нет авторизации");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function DeleteTask({id, user}) {
  token = user.token
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });

  if (response.status !== 201) {
    throw new Error("Ошибка удаления задачи");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function AddTask({user, title, topic, description, status, date }) {
  token = user.token
  const response = await fetch("https://wedev-api.sky.pro/api/kanban",
   {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      description,
      status,
      date
    }),
  });
  if (response.status !== 201) {
    throw new Error("Ошибка при добавлении задачи");
  } else {
    const data = await response.json();
    return data;
  }
}




