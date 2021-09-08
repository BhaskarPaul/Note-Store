import React, { useState } from "react";
import styled from "styled-components";
import MyModal from "./Modal";
import { useDispatch } from "react-redux";
import { deleteTodoAsync } from "../container/actions";

const Div = styled.div`
  width: 90.96px;
  height: 28.04px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "yellow"
      ? "#FFE600"
      : props.color === "white"
      ? "#FFFFFF"
      : props.color === "green"
      ? "#61c100"
      : "#FF0000"};
  @media only screen and (max-width: 600px) {
    width: 40px;
  }
`;

const Button = ({ children, color, type, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodoAsync(id));
  };

  const handleModal = () => {
    if (type === "Edit") setIsOpen(true);
    if (type === "Add") setIsOpen(true);
    if (type === "Delete") removeTodo(id);
  };
  return (
    <div>
      <MyModal id={id} type={type} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Div color={color} onClick={() => handleModal()}>
        {children}
      </Div>
    </div>
  );
};

export default Button;
