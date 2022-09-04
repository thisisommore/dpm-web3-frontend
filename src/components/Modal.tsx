import React, { useEffect, useState } from "react";
import StyledModal from "./StylesModal";

const FormModal: React.FC<React.PropsWithChildren> = (p) => {
  const [active, setActive] = useState(true);

  return (
    <StyledModal
      className={active ? "active" : ""}
      onClick={() => setActive(false)}
    >
      <div className="modal bg-black p-20">{p.children}</div>
    </StyledModal>
  );
};
export default FormModal;
