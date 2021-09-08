import React, { useState } from "react";
import Button from "./Button";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import MyModal from "./Modal";

const CardDiv = styled.div`
  padding: 30px;
  min-width: 367px;
  min-height: 264.93px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  
`;

const CardP = styled.p`
  padding-bottom: 16px;
  padding-top: 16px;
  font-size: 15px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.59);
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

const ButtonWrapperDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  place-items: center;
`;

export const ButtonTextP = styled.p`
  font-size: 14px;
  line-height: 20px;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const CardH1 = styled.h1`
  font-size: 30px;
  line-height: 33px;
  color: #000000;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const CardH1Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const Card = ({ title, description, fav, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardDiv>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <CardH1Div>
        <CardH1>{title}</CardH1>
        {fav && <p>⭐</p>}
      </CardH1Div>
      <hr />
      <CardP>{description}</CardP>
      <ButtonWrapperDiv>
        <Button color="yellow" type="Edit" id={id}>
          <FiEdit />
          <ButtonTextP>Edit</ButtonTextP>
        </Button>
        <Button type="Delete" id={id}>
          <MdDelete />
          <ButtonTextP>Delete</ButtonTextP>
        </Button>
      </ButtonWrapperDiv>
    </CardDiv>
  );
};

export default Card;
