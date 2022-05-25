import React from "react";
import styled from "styled-components";
import WeekPoint from "./WeekPoint";
import { Route } from "react-router-dom";
import DayPoint from "./DayPoint";

//마지막에 css 정리좀.. 하기 


function App() {
  
  return (
    <div className="App">
        <Route path="/" exact>
          <WeekPoint/>
        </Route>

        <Route path="/daypoint/:weekId" exact>
          <DayPoint/>
        </Route>
 </div>
  );
}

const Input = styled.div`
max-width: 350px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;





export default App;
