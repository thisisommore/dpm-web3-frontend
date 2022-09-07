import styled from "styled-components";

const StyledModal = styled.div`
  div.bg {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    background-color: #ffffff3b;
    z-index: 1;

    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  transition: 0.3s;

  transform: translate(-100%);

  &.active {
    transform: translate(0);
  }
`;

export default StyledModal;
