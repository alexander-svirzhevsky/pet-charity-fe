import { createGlobalStyle } from "styled-components";

const colors = {
  primary: "#002169",
  secondary: "#00b8e0",
  white: "#fff",
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
  margin-top: 150px;
}

.ant-form-item {
  width: 40%;
}
`;

export { GlobalStyle, colors };
