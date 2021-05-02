import { createGlobalStyle } from "styled-components";

const colors = {
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
}

.wrapper {
  position: relative;
  width: 100%;
  min-height: 650px;
  overflow: hidden;
}

.container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  font-weight: normal;
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
`;

export { GlobalStyle };
