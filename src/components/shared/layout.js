import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 40px;
`;

export { Container, Wrapper, Title };
