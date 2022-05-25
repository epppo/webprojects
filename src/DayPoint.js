import React from "react";
import styled from "styled-components"
import { useHistory, useParams } from "react-router-dom"

//평점그리기 동그라미 이벤트 걸기 
// 평점남기기 버튼 


const DayPoint = (props) => {
    const circle = React.useRef(null);
    const history = useHistory();
    const param = useParams();
    const dayName = param.weekId;

    let [clickCount, setCount] = React.useState(0)

    React.useEffect(() => {

    const keyPress = (e) => {
            if ([1, 2, 3, 4, 5].indexOf(Number(e.key)) !== -1) {
                setCount(Number(e.key));
            }
        };
        window.addEventListener("keydown", keyPress)
        
        return ()=> window.removeEventListener("keydown",keyPress)
    })





    //클릭할때마다 증감해주는 함수
    return (
        <Container>
                <Title>{dayName}요일 평점남기기</Title>
            <Line/>
            <CircleWrap>
        
            {Array.from({ length: 5 }, (item, idx) => {
                return (
                    
                    <div
                        key={idx}
                        onClick={() => {
                            setCount(idx+1);
                        } }
                        style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "30px",
                        margin: "5px",
                        backgroundColor: 
                        clickCount < idx + 1 ? "#ddd" : "purple"
                        //처음에 0일땐 0이니까 0이 출력되야함...1 말구 
                    }} ref={circle} // 온클릭을 여기줘야되는데..
                    ></div>
                )
            })}
            </CircleWrap>   
            <Line/>
            <ButtonStyle
                onClick={() => {
                    history.push(`/`)
                }}>
                평점남기기
            </ButtonStyle>
        </Container>
    )
}

export default DayPoint;

const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;



const Title = styled.h1`
color: slateblue;
text-align: center;
`;


const CircleWrap = styled.div`
display: flex;
justify-content: center;

`;


const ButtonStyle = styled.button`

color : white;
width : 150px;
height : 30px;
margin-top: 15px;
margin-left: 100px;



background-color: slateblue;

`


