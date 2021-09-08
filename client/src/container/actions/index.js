import axios from "axios";

const base_url = "https://note-store.herokuapp.com/";

export const showTodoAsync = () => async (dispatch, getState) => {
  const response = await axios.get(`${base_url}todos/`);
  const data = await response.data;
  if (data !== []) dispatch(showTodo(data));
};

export const showTodoAsyncFav = () => async (dispatch, getState) => {
  const response = await axios.get(`${base_url}todos/fav`);
  const data = await response.data;
  if (data !== []) dispatch(showTodo(data));
};

export const addTodoAsync = (data) => async (dispatch, getState) => {
  const response = await axios.post(`${base_url}todos/`, data);
  const result = await response.data;
  console.log(result);
  dispatch(addTodo(data));
};

export const deleteTodoAsync = (id) => async (dispatch, getState) => {
  const response = await axios.delete(`${base_url}todos/${id}`);
  const result = await response.data;
  console.log(result);
  dispatch(deleteTodo(id));
};

export const editTodoAsync = (payload) => async (dispatch, getState) => {
  const response = await axios.put(`${base_url}todos/${payload._id}`, payload);
  const result = await response.data;
  console.log(result);
  dispatch(editTodo(payload));
};

export const editTodo = (payload) => {
  return {
    type: "EDIT",
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: "DELETE",
    payload,
  };
};

export const showTodo = (payload) => {
  return {
    type: "SHOW",
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};
