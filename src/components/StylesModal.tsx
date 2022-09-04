import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  backdrop-filter: blur(4px);
  background-color: #ffffff3b;
  height: 100vh;
  width: 100vw;
  transform: translate(-100%);
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  &.active {
    transform: translate(0);
  }
`;

export default StyledModal;
