import styled from "styled-components";

const Item = styled.div`
  margin: 20px auto;
  border: 1px solid;
  border-color: ${({ theme }) => theme.borderCard};
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
  padding: ${(props) => props.padding || "0 0 50px 0"};
  align-items: ${(props) => props.alignItems || "initial"};
`;

const Photo = styled.div`
  height: 320px;
  margin-bottom: 10px;
`;

const Name = styled.span`
  display: block;
  margin: auto;
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

const Breed = styled.span`
  display: block;
  margin: auto;
  color: ${({ theme }) => theme.secondary};
  font-weight: 700;
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;

export { Item, Photo, Name, Breed };
