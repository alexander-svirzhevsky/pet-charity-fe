import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.white};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Toggle;

// import React from "react";
// import { Switch } from "antd";

// const DarkMode = () => {
//   let clickedClass = "clicked";
//   const body = document.body;
//   const lightTheme = "light";
//   const darkTheme = "dark";
//   let theme;

//   if (localStorage) {
//     theme = localStorage.getItem("theme");
//   }

//   if (theme === lightTheme || theme === darkTheme) {
//     body.classList.add(theme);
//   } else {
//     body.classList.add(lightTheme);
//   }

//   const switchTheme = (e) => {
//     if (theme === darkTheme) {
//       body.classList.replace(darkTheme, lightTheme);

//       e.target.classList.remove(clickedClass);

//       localStorage.setItem("theme", "light");

//       theme = lightTheme;
//     } else {
//       body.classList.replace(lightTheme, darkTheme);

//       e.target.classList.add(clickedClass);

//       localStorage.setItem("theme", "dark");

//       theme = darkTheme;
//     }
//   };

//   return (
//     <button
//       className={theme === "dark" ? clickedClass : ""}
//       id="darkMode"
//       onClick={(e) => switchTheme(e)}
//     ></button>
//   );
// };

// export default DarkMode;
