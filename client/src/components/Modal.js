import React, { useState } from "react";
import "../App.css";
import Modal from "react-modal";
import styled from "styled-components";
import Emoji from "./Emoji";
import Button from "./Button";
import { HiSave } from "react-icons/hi";
import { ButtonTextP } from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { addTodoAsync, editTodoAsync } from "../container/actions";
import { v4 as uuid } from "uuid";

Modal.setAppElement("#root");

const H1 = styled.h1`
  font-size: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 708px;
  height: ${(props) => (props.desc ? "224.44px" : "64.72px")};
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 5px 0 5px;
  color: gray;
  @media only screen and (max-width: 600px) {
    width: 250px;
    height: ${(props) => (props.desc ? "224.44px" : "64.72px")};
  }
`;

const HR = styled.hr`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CheckDiv = styled.div`
  margin-left: 100px;
`;

const MyModal = ({ isOpen, setIsOpen, type, id }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsOpen(false);
  };

  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const [todoFav, setTodoFav] = useState(false);

  const resetHooks = () => {
    setTodoTitle("");
    setTodoDesc("");
    setTodoFav(false);
  };

  const saveTodo = () => {
    if (type === "Add") {
      dispatch(
        addTodoAsync({
          _id: uuid(),
          title: todoTitle,
          description: todoDesc,
          fav: todoFav,
        })
      );
      resetHooks();
      setIsOpen(false);
    }
    if (type === "Edit") {
      dispatch(
        editTodoAsync({
          _id: id,
          title: todoTitle,
          description: todoDesc,
          fav: todoFav,
        })
      );
      resetHooks();
      setIsOpen(false);
    }
  };

  const onAfterOpen = () => {
    let currTodo;
    if (type === "Edit") {
      currTodo = todos.find((todo) => todo._id === id);
    }
    if (currTodo) {
      setTodoTitle(currTodo.title);
      setTodoDesc(currTodo.description);
      setTodoFav(currTodo.fav);
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={"react-modal"}
        onAfterOpen={onAfterOpen}
      >
        <H1>
          <Emoji />
          &nbsp; {type} Todo
        </H1>
        <HR />
        <div>
          <InputDiv>
            <label>Title</label>
            <Input
              type="text"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
            />
          </InputDiv>
          <InputDiv>
            <label>Description</label>
            <Input
              desc
              type="text"
              value={todoDesc}
              onChange={(e) => setTodoDesc(e.target.value)}
            />
          </InputDiv>
        </div>
        <CheckDiv>
          <input
            type="checkbox"
            style={{ marginRight: "10px" }}
            checked={todoFav}
            onChange={(e) => setTodoFav(e.target.checked)}
          />
          <label>make it favorutite</label>
        </CheckDiv>
        <div style={{ float: "right", marginTop: "15px" }}>
          <div onClick={() => saveTodo()}>
            <Button color="green">
              <HiSave />
              <ButtonTextP>Save</ButtonTextP>
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyModal;
