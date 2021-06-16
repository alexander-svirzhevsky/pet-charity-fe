import { createGlobalStyle } from "styled-components";

const colors = {
  primary: "#002169",
  secondary: "#00b8e0",
  white: "#fff",
  black: "#000",
  red: "#dd2750",
};

const GlobalStyle = createGlobalStyle`
 html,
  body {
  height: 100%;
}

body {
  font-family: "Roboto", "Arial", "Helvetica", sans-serif;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  color: #002169;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s linear;
}

.wrapper {
  position: relative;
  width: 100%;
  min-height: 650px;
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  transition: all 0.6s linear;
  margin-top: 0;
  font-weight: normal;
  color: ${({ theme }) => theme.text};
}

.tabel {
  border-collapse: collapse;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

p {
  padding: 0;
  margin: 0;
}

footer {
  position: relative;
  width: 100%;
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

input {
  outline: none;
}

.ant-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ant-form-item {
  width: 100%;
}

.ant-form-item-label > label {
  color: ${({ theme }) => theme.label};
}

.ant-carousel .slick-dots li button {
    background: #fff;
}

.ant-carousel .slick-dots li.slick-active button {
    opacity: 1;
}

.ant-carousel .slick-slide img {
    object-fit: cover;
}

.ant-form-item-control-input {
  max-width: 400px;
}

.ant-form-item-control-input-content, .ant-select-selection-item{
  display: inline-flex;
}

`;

export { GlobalStyle, colors };
