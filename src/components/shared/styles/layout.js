import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { respondTo } from "./media/respondTo";

const DefaultButton = styled(Button)`
  margin: ${(props) => props.margin || "20px"};
  background-color: ${({ theme }) => theme.blue};
  border-color: ${({ theme }) => theme.blue};
  color: ${(props) => props.color || "#fff"};
  transform: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.blue};
    border-color: ${({ theme }) => theme.blue};
    color: #fff;
    box-shadow: 0px 4px 14px 3px ${({ theme }) => theme.defaultBtnHover};
  }
`;

const DeleteButton = styled(Button)`
  margin: ${(props) => props.margin || "20px"};
  background-color: ${({ theme }) => theme.red};
  border-color: ${({ theme }) => theme.red};
  color: ${(props) => props.color || "#fff"};
  transform: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.red};
    border-color: ${({ theme }) => theme.red};
    color: #fff;
    box-shadow: 0px 4px 14px 3px ${({ theme }) => theme.red};
  }
`;

const Container = styled.div`
  width: 95%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: ${(props) => props.textAling};
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
  background-color: ${({ theme }) => theme.header};
`;

const FormArea = styled.div`
  width: 100%;
  margin-bottom: 40px;
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
  margin-top: 100px;
`;

const List = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: center;
  flex-wrap: wrap;
  margin-top: ${(props) => props.marginTop || "40px"};
  margin-bottom: 10px;

  ${respondTo.tablets`
     margin-bottom: 0;
     flex-direction: column;
   `}
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

  ${respondTo.tablets`
     font-size: 30px;
   `}
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

  ${respondTo.tablets`
     font-size: 14px;
   `}
`;

const BackgroundFill = styled.div`
  width: 100%;
  min-height: ${(props) => props.height || "100vh"};
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  text-align: ${(props) => props.textAlign || "center"};
  justify-content: ${(props) => props.justifyContent || "center"};
  margin: ${(props) => props.margin || "0"};
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

  ${respondTo.tablets`
     padding: 10px 20px;
   `}
`;

const AdditionalInfo = styled(Link)`
  display: ${(props) => props.display || "block"};
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
  white-space: nowrap;
  flex-wrap: wrap;
`;

const Col = styled.div`
  flex: ${(props) => props.flex || "0 0 50%"};

  ${respondTo.tablets`
     width: 75%;
   `}

  ${respondTo.phones`
     width: 100%;
   `}
`;

const Descriptions = styled.div`
  padding: ${(props) => props.padding || "10px"};
`;

const FormContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-top: 50px;
  width: 50%;

  ${respondTo.phones`
     width: 100%;
   `}
`;

const Text = styled.span`
  color: ${({ theme }) => theme.text};
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
  Descriptions,
  FormContent,
  DefaultButton,
  DeleteButton,
  Text,
};
