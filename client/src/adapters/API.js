const API_ENDPOINT = "http://localhost:4000/";
const TASKS_ENDPOINT = `${API_ENDPOINT}tasks`;

const handleError = (e) => {
  throw e;
};

//this was borrowed in the interest of time
const handleServerResponse = (res) => {
  if (res.ok) {
    return res.text().then((text) => {
      try {
        return JSON.parse(text);
      } catch (error) {
        return { staticPageContent: text };
      }
    });
  } else if (res.status === 503) {
    return { code: 503 };
  } else if (res.status === 500) {
    return { code: 500, error: "Something went wrong" };
  } else {
    return res.json().then((data) => {
      throw data;
    });
  }
};

const getTasks = () => fetch(TASKS_ENDPOINT).then(handleServerResponse);

const getTask = (id) =>
  fetch(`TASKS_ENDPOINT/${id}`).then(handleServerResponse);

const createTask = async (task) => {
  console.log("<<<", task);
  const response = await fetch(TASKS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};

const deleteTask = async (id) => {
    console.log("delete");
    const data = await fetch(`${TASKS_ENDPOINT}/${id}`, {
      method: "DELETE",
    });
  };

export default {
  getTasks,
  createTask, 
  deleteTask
};
