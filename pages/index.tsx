import type { NextPage } from "next";
import { useState } from "react";
import BlueCard, { BlueCardProps } from "../src/components/BlueCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MintModal from "./components/MintModal";
import ReleaseModal from "./components/ReleaseModal";
const Home: NextPage = () => {
  const [mintModalActive, setMintModalActive] = useState(false);
  const [releaseModalActive, setReleaseModalActive] = useState(false);

  const blueCardProps: BlueCardProps[] = [
    {
      header_first_word: "Create",
      header_second_word: "Package",
      description: "Guess what we need, just the name",
      buttonAction: () => setMintModalActive(true),
      buttonName: "Create",
    },
    {
      header_first_word: "Release",
      header_second_word: "Version",
      description: (
        <>
          Tag the version add the immutable hash And
          <span className="text-orange-200"> no one </span>
          can take down it
        </>
      ),
      buttonAction: () => setReleaseModalActive(true),
      buttonName: "Release",
    },
    {
      header_first_word: "Download",
      header_second_word: "CLI",
      description:
        "CLI is used to fetch the packages from decentralised Registry",
      buttonAction: () => console.log("Download"),
      buttonName: "DOWNLOAD",
    },
  ];
  return (
    <>
      <MintModal
        active={mintModalActive}
        onBackDropClick={() => setMintModalActive(false)}
      />
      <ReleaseModal
        active={releaseModalActive}
        onBackDropClick={() => setReleaseModalActive(false)}
      />

      <div className="p-6 md:p-12 w-full">
        <Header />
        <div className="flex flex-col md:flex-row my-6 w-full">
          {blueCardProps.map((d, i) => (
            <BlueCard
              key={i}
              header_first_word={d.header_first_word}
              header_second_word={d.header_second_word}
              description={d.description}
              buttonAction={d.buttonAction}
              buttonName={d.buttonName}
            />
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
