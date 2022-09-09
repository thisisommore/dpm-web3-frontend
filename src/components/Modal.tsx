import React, { useEffect, useState } from "react";
import StyledModal from "./StylesModal";

type Props = {
  active: boolean;
  onBackDropClick?: () => void;
};
const FormModal: React.FC<React.PropsWithChildren<Props>> = (p) => {
  return (
    <>
      <StyledModal className={p.active ? "active " : ""}>
        <div className="modal z-10 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-10 w-4/6">
          {p.children}
        </div>
        <div className="bg" onClick={p.onBackDropClick} />
      </StyledModal>
    </>
  );
};
export default FormModal;
