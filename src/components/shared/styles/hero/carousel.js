import styled from "styled-components";

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
`;

const CarouselStatistics = styled.span`
  font-size: 40px;
  font-weight: 500;
  border-right: 2px solid #00a2c7;
  padding-right: 10px;
  display: block;
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
