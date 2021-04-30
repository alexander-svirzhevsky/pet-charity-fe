import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 95%;
  max-width: 900px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 650px;
  overflow: hidden;
`;

const Header = styled.header`
  color: #002169;
  font-size: 17px;
  font-weight: 800;
  line-height: 30px;
  width: 100%;
  border-bottom: 2px solid #efefef;
`;

const Section = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 40px;
  color: #fff;
  color: ${(props) => props.color || "white"};
`;

const BackgroundFill = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Btn = styled.button`
  background-color: #fff;
  border: #00b8e0 2px solid;
  font-size: 18px;
  line-height: 30px;
  padding: 15px 30px;
  color: #002169;
  border-radius: 50px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #00b8e0;
    color: #fff;
  }
`;

const AdditionalInfo = styled(Link)`
  display: block;
  font-weight: 600;
  margin: auto;
  color: #002169;
  font-size: 15px;
  line-height: 20px;
  padding: 5px 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00b8e0;
    color: #fff;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: center;
  text-align: center;
  border-bottom: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || 0};
`;

export {
  Container,
  Wrapper,
  Title,
  Row,
  Section,
  List,
  AdditionalInfo,
  Header,
  BackgroundFill,
  Btn,
};