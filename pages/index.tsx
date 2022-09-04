import type { NextPage } from "next";
import Script from "next/script";
import { useContext } from "react";
import { WalletContext } from "../src/contexts/WalletContext";
import style from "../styles/Home.module.css";
import MintModal from "./components/MintModal";
const Home: NextPage = () => {
  const walletContext = useContext(WalletContext);
  return (
    <>
      <MintModal />
      <Script src="https://code.iconify.design/2/2.2.1/iconify.min.js" />
      <div className="p-12" style={style}>
        <header className="flex justify-between text-3xl">
          <div className="div aclonica">
            <h1 className="text-orange-600">NPM</h1>
            <h1>IN</h1>
            <h1 className="text-purple-600">WEB3</h1>
          </div>

          <nav className="flex asap-condensed">
            <h2 className="mx-3">CLI</h2>
            <h2 className="mx-3">DASHBOARD</h2>
          </nav>
        </header>
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
      </div>
    </>
  );
};

export default Home;
