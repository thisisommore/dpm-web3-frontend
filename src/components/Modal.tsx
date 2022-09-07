import React, { useEffect, useState } from "react";
import StyledModal from "./StylesModal";

const FormModal: React.FC<React.PropsWithChildren> = (p) => {
  const [active, setActive] = useState(true);

  return (
    <>
      <StyledModal className={active ? "active " : ""}>
        <div className="modal z-10 fixed left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 bg-black p-20 w-5/6">
          {p.children}
        </div>
        <div className="bg" onClick={() => setActive(false)} />
      </StyledModal>
    </>
  );
};
export default FormModal;
