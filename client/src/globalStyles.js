import styled, { createGlobalStyle, css } from "styled-components";

/* <link href="https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap" rel="stylesheet"></link> */

export const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Nunito', sans-serif;
}
body{
  background: #eee;
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px 20px;
  min-height: 100vh;
  flex-direction: column;

  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const TextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  color: #555;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export default GlobalStyle;
