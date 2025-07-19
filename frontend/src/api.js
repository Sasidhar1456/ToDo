const BASE_URL = 'http://localhost:3000/tasks';


// get Tasks from backend
export const getTasks = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};


// add Task api call
export const addTask = async (title) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  return res.json();
};


// delete task api call
export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};


// update task api call
export const toggleTask = async (id, completed) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  });
  return res.json();
};
