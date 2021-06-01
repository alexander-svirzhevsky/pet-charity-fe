import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 95%;
  max-width: 1100px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Header = styled.header`
  font-size: 17px;
  font-weight: 800;
  line-height: 30px;
  width: 100%;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.borderColor};
`;

const FormArea = styled.div`
  width: 100%;
`;

const SubLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.text};
  color: ${(props) => props.color};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex: ${(props) => props.flex || "0"};
  flex-direction: ${(props) => props.flexDirection || "none"};
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${(props) => props.marginTop || "40px"};
  margin-bottom: 10px;
`;

const Title = styled.h1`
  position: relative;
  text-align: ${(props) => props.textAlign || "none"};
  font-weight: ${(props) => props.weight || "800"};
  font-size: ${(props) => props.fontSize || "36px"};
  line-height: ${(props) => props.lineHeight || "40px"};
  margin-bottom: ${(props) => props.marginBottom || "40px"};
  margin-top: ${(props) => props.marginTop || "0"};
  color: ${({ theme }) => theme.text};
  color: ${(props) => props.color};
`;

const Heading = styled.h2`
  font-weight: 800;
  font-size: 34px;
  line-height: 40px;
  margin-bottom: ${(props) => props.marginBottom || "10px"};
  color: ${(props) => props.color || "white"};
`;

const SubTitle = styled.p`
  position: relative;
  display: block;
  letter-spacing: 1px;
  font-size: 17px;
  margin-bottom: ${(props) => props.marginBottom || "5px"};
  font-weight: ${(props) => props.weight || "900"};
  color: ${({ theme }) => theme.text};
  color: ${(props) => props.color};
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
  position: relative;
  background-color: #fff;
  border: 2px solid;
  border-color: ${(props) => props.borderColor || "#00b8e0"};
  font-size: ${(props) => props.fontSize || "18px"};
  line-height: 30px;
  padding: ${(props) => props.padding || "15px 30px"};
  color: ${(props) => props.color || "#002169"};
  border-radius: 50px;
  font-weight: ${(props) => props.fontWeight || "800"};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.hoverColor || "#00b8e0"};
    color: #fff;
  }
`;

const Navigate = styled(Link)`
  position: relative;
  background-color: #fff;
  border: 2px solid;
  border-color: ${(props) => props.borderColor || "#00b8e0"};
  font-size: ${(props) => props.fontSize || "18px"};
  line-height: 30px;
  padding: ${(props) => props.padding || "15px 30px"};
  color: ${(props) => props.color || "#002169"};
  border-radius: 50px;
  font-weight: ${(props) => props.fontWeight || "800"};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(props) => props.hoverColor || "#00b8e0"};
    color: #fff;
  }
`;

const AdditionalInfo = styled(Link)`
  display: block;
  font-weight: 600;
  margin: auto;
  color: ${({ theme }) => theme.text};
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
  align-items: ${(props) => props.alignItems || "flex-start"};
  text-align: center;
  border-bottom: ${(props) => props.border || "none"};
  padding: ${(props) => props.padding || 0};
  width: ${(props) => props.width || "100%"};
  margin-bottom: ${(props) => props.marginBottom || "5px"};
  flex-direction: ${(props) => props.flexDirection || "initial"};
  font-size: ${(props) => props.fontSize || "inherit"};
  font-weight: ${(props) => props.fontWeight || "inherit"};
`;

const Col = styled.div`
  flex: 0 0 50%;
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
  Col,
  SubTitle,
  Heading,
  FormArea,
  SubLink,
  Navigate,
};
