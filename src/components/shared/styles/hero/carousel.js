import styled from "styled-components";
import { respondTo } from "../media/respondTo";

const CarouselContent = styled.div`
  max-height: 600px;
  color: "#fff";
  position: relative;
  display: flex;
`;

const CarouselText = styled.div`
  position: absolute;
  z-index: 100;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 33, 105, 0.8);
  padding: 50px 20px;
  color: #fff;
  display: flex;
  align-items: center;

  ${respondTo.tablets`
     padding: 35px 10px;
     flex-direction: column;
   `}

  ${respondTo.phones`
     padding: 20px 10px;
   `}
`;

const CarouselStatistics = styled.span`
  font-size: 40px;
  font-weight: 500;
  border-right: 2px solid #00a2c7;
  padding-right: 10px;
  display: block;

  ${respondTo.tablets`
     border-bottom: 2px solid #00a2c7;
     border-right: none;
     padding-right: 0;
   `}
`;

const CarouselDescription = styled.span`
  margin-left: 10px;
`;

export {
  CarouselContent,
  CarouselText,
  CarouselStatistics,
  CarouselDescription,
};
