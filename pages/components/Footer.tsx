import React, { useContext } from "react";
import { WalletContext } from "../../src/contexts/WalletContext";

export default function Footer() {
  const walletContext = useContext(WalletContext);

  return (
    <>
      {walletContext.web3Provider ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={walletContext.clearWallet}
        >
          <span
            className="iconify"
            data-icon="fluent:plug-connected-checkmark-20-regular"
          ></span>
          <p className="mx-1 mb-1">{walletContext.walletAddress}</p>
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={walletContext.getWeb3Provider}
        >
          <span
            className="iconify"
            data-icon="fluent:plug-disconnected-20-regular"
          ></span>
          <p className="mx-1 mb-1">not connected</p>
        </div>
      )}
    </>
  );
}
