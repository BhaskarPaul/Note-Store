import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { BiMessageAdd } from "react-icons/bi";
import { ButtonTextP } from "./Card";

const Div = styled.div`
  min-width: 100%;
  min-height: 80px;
  background-color: #ffe600;
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const P = styled.p`
  font-size: 48px;
  line-height: 65px;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const NavBar = ({ heading }) => {
  return (
    <Div>
      <P>{heading}</P>
      <Button color="white" type="Add">
        <BiMessageAdd />
        <ButtonTextP>Add</ButtonTextP>
      </Button>
    </Div>
  );
};

export default NavBar;
