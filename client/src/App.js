import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./components/Card";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Select from "react-select";
import { showTodoAsync, showTodoAsyncFav } from "./container/actions";

const Div = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  place-items: center;
  gap: 30px;
  padding: 30px 60px 30px 60px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const SelectDiv = styled.div`
  padding: 0px 60px 0px 60px;
  width: 320px;
  float: right;
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 0px 30px 0px 30px;
  }
`;

const options = [
  { value: "All", label: "🌍 All" },
  { value: "Favourites", label: "⭐ Favourites" },
];

const App = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [selectOptionValue, setSelectOptionValue] = useState("All");

  useEffect(() => {
    if (selectOptionValue === "All") {
      dispatch(showTodoAsync());
    }
    if (selectOptionValue === "Favourites") {
      dispatch(showTodoAsyncFav());
    }
  }, [selectOptionValue]);

  return (
    <>
      <NavBar heading="NoteStore" />
      <SelectDiv>
        <Select
          options={options}
          onChange={(e) => setSelectOptionValue(e.value)}
        />
      </SelectDiv>

      {/* cards display here */}
      <Div>
        {todos !== null &&
          todos.map((todo, idx) => (
            <Card
              title={todo.title}
              description={todo.description}
              key={todo._id}
              id={todo._id}
              fav={todo.fav ? true : false}
            />
          ))}
      </Div>
    </>
  );
};

export default App;
