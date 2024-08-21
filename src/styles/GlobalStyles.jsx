import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CookieRun-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#root{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
}

body {
  font-family: 'CookieRun-Regular';
  background-color: var(--layout-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing:1px;
  word-spacing: 1px;
  line-height: 20px;
  word-break: keep-all;
}

div{
  margin: 5px;
}

@keyframes blink-effect {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.press-sign{
  font-size: 18px;
  color:white;
  animation: blink-effect 1s step-end infinite;
}

#pokemon-list-container {
  width: 1300px;
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px;
  grid-template-rows: 250px 250px 250px 250px;
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background-color: var(--background-color);
  border-radius: 15px;
  padding: 50px 0;
}

.pokemons {
  width: 200px;
  height: 250px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  transition-duration: 0.3s;

&:hover{
  transform: translateY(-5px);
  box-shadow: 0px 0px 5px gray;
  border-radius: 10px;
  }
}

.pokemons img {
  width: 150px;
  height: 150px;
}

#my-dashboard{
  width: 1300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  border-radius: 15px;
  margin: 20px;
  justify-content: center;
  align-items: center;
}

#my-pokemon-list {
  width: 1300px;
  height: 200px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.my-pokemons{
  width: 160px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  transition-duration: 0.3s;
  justify-content: center;

&:hover{
  transform: translateY(-5px);
  box-shadow: 0px 0px 5px gray;
  border-radius: 10px;
  }
}

.pokeballs{
  width: 100px;
  height: 100px;
  padding: 0px 30px;
}

#detail-container {
  display: flex;
  justify-content: center;
}

#pokemon-detail {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 20px;
  line-height: 30px;
}

#pokemon-detail img{
  width: 250px;
  height: 250px;
}

#start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
}

#start-logo{
  width: 700px;
  height: 250px;
  margin: 50px;
}

h1{
  text-align: center;
  font-size: 60px;
  margin: 50px;
  letter-spacing:10px;
}

button {
  cursor: pointer;
}

div.swal2-icon {
   margin: 0 auto; 
}

.swal2-popup {
  padding: 30px
}

.swal2-title{
  font-size: 28px;
  line-height: 40px;
  padding: 20px 0;
}

a{
  text-decoration: none;
  color: black;
}

#top-scroll{
  position: fixed;
  bottom: 50px;
  right: 50px;
  color: var(--gray-color);
  font-size: 35px;
  padding: 10px;
  background-color: white;
  border-radius: 100%;
  cursor: pointer;
  &:hover{
    background-color: var(--background-color);
  }
}

.material-symbols-rounded {
  font-variation-settings:
  'FILL' 1,
  'wght' 300,
  'GRAD' 0,
  'opsz' 48
}
`;

export default GlobalStyle;
