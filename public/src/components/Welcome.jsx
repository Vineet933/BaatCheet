import React from 'react'
import styled from 'styled-components'
import Robot from "../assets/robot.gif"

export default function Welcome({ currentUser }) {
    if (!currentUser || !currentUser.username) {
        // Handle the case where currentUser is not defined or doesn't have a username
        return (
            <Container>
                <img src={Robot} alt="Robot" />
                <h1>
                    Welcome!
                </h1>
                <h3>Please Select A chat to Start Messaging.</h3>
            </Container>
        );
    }

    return (
        <Container>
            <img src={Robot} alt="Robot" />
            <h1>
                Welcome, <span>{currentUser.username}!</span>
            </h1>
            <h3>Please Select A chat to Start Messaging.</h3>
        </Container>
    );
}

const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction:column;
     color: white;
     img {
         height : 20rem;
     }
     span {
         background-color: #4e00eff;
     }
`;
