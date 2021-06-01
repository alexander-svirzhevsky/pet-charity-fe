import styled from "styled-components";

const AuthContent = styled.div`
  background: rgba(255, 255, 255, 0.77);
  padding: 30px;
  border-radius: 100px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContent = styled.div`
  flex: 0 0 50%;
`;

const AuthGoogle = styled.div`
  flex: 0 0 36%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { AuthContent, LoginContent, AuthGoogle };
