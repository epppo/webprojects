import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const WeekAvg = (props) => {
    const list = props.list;

    let sum = 0;
    
    list.map((list) => {
        return sum += list.circleNum;
    })
    
    let setAvg = (sum / 7).toFixed(1)
    let [avg, setState] = React.useState(setAvg); 

    
    return (
        <>
            <Wrap>
                
                <Title>평균 평점은?</Title>
                <Title>{avg}</Title> 
                <ButtonStyle onClick={() => { setState(0).toFixed(1)}}>Reset</ButtonStyle> 
            </Wrap>
        </>
    );
}



const Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;


const Title = styled.h2`
color: slateblue;
margin : 5px
`;

const ButtonStyle = styled.button`

color : white;
width : 150px;
height : 30px;
margin-top: 15px;


background-color: slateblue;

`



export default WeekAvg;