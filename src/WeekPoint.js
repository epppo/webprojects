import React from "react";
import styled from "styled-components";
import { useHistory} from "react-router-dom";
import WeekAvg from "./WeekAvg";

const WeekPoint = () => {
    const history = useHistory();
    let today = new Date().getDay();

    
    console.log(today)

    const week_list = [
        { weekId: '일', circleNum: Math.ceil(Math.random() * 5) },
        { weekId: '월', circleNum: Math.ceil(Math.random() * 5) },
        { weekId: '화', circleNum: Math.ceil(Math.random() * 5) },
        { weekId: '수', circleNum: Math.ceil(Math.random() * 5) },
        { weekId: '목', circleNum: Math.ceil(Math.random() * 5) },
        { weekId: '금', circleNum: Math.ceil(Math.random() * 5) },
        { weekId: '토', circleNum: Math.ceil(Math.random() * 5) }
    ];


    const todayStart = week_list.map((list, i) => {
        return 6 < (today+i) ?  week_list[i+today-7] : week_list[i+today] 
    })

    console.log(todayStart)


   
    const listRead = (todayStart.map((todayStart, i) =>
        <div style={{
            display: 'flex',
            justifyContent : 'center'
        }}>
            <h2>{todayStart.weekId}    :</h2> 

                {Array.from({ length: 5 }, (po, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "30px",
                            margin: "10px",
                            marginTop:"22px",
                            backgroundColor:
                            todayStart.circleNum < i+1 ? "#ddd" : "purple"
                        }} ></div>
                    );
                })}
                   
                <div style={{
                width: "0",
                height: "0",
                margin: "10px",
                marginTop:"19px",
                 
                borderTop: "18px solid transparent",
                borderBottom: "18px solid transparent",
                borderLeft: "18px solid slateblue"
                    
                }}
                    onClick={() => {
                        history.push(`/daypoint/${todayStart.weekId}`)
                                                            
                }}>
            </div>
        </div>

    ))


    return (
            <Container>
                <Title>내 일주일은? </Title>
            <Line />
                {listRead}
            <Line />
            <WeekAvg list={todayStart}/>
            
            
            </Container>

    )

}


const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;


export default WeekPoint;




