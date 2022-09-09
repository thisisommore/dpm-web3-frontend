import styled from "styled-components";

const StyledModal = styled.div`
  div.bg {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    background-color: #38383839;
    z-index: 1;

    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    transition-timing-function: ease-out;
  }
  position: fixed;
  transition-timing-function: ease-out;

  transition: 0.3s;
  height: 100vh;
  width: 100vw;

  transform: translateY(-100%);
  &.active {
    backdrop-filter: blur(14px);
    transform: translate(0);
  }
`;

export default StyledModal;
