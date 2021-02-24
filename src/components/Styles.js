import styled from 'styled-components';


//export unnamed styled-component (exported to hooks in this case)
export const DivSC = styled.div`
    background-color: ${props => props.bgc || "purple"};
    width: 400px;
    height: 400px;
`;

export const H1S = styled.h1`
    background-color: lightgray;
    text-align: center;
    width: 100%;
    height: 20vh;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 1px solid darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;

`;

export const HomeH1 = styled.h1`
    height: 20vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;


export const ButtonDiv = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Divider = styled.div`
  border-left: 6px solid darkgray;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
`;