import { NFTStorage } from "nft.storage";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormModal from "../../src/components/Modal";
import { WalletContext } from "../../src/contexts/WalletContext";
import { PackageMg__factory } from "../../src/contracts";
import { PackageMgAddr } from "../../src/env";
import { asyncStore } from "../../src/services/nft.storage";
interface MetaData {
  name: string;
  description: string;
  attributes: Attribute[];
  image: string;
}

interface Attribute {
  trait_type: string;
  value: string;
}

//TODO: better logic for passing this, maybe some context
type Props = {
  active: boolean;
  onBackDropClick?: () => void;
};
type FormValues = {
  packageName: string;
};
export default function MintModal(p: Props) {
  const { register, handleSubmit } = useForm<FormValues>();
  const walletContext = useContext(WalletContext);
  const onSubmit = async (v: FormValues) => {
    const provider = await walletContext.getWeb3Provider();
    const signer = provider.getSigner();
    const PackageMg = PackageMg__factory.connect(PackageMgAddr, signer);
    const client = new NFTStorage({
      token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
    });

    const imgUri =
      "ipfs://bafkreibzqc7btoxnht4sjsjtcu7wyo36olxuwkpc5x2oqlokrd5rejq6tu";
    const metaData: MetaData = {
      name: "DpmNFT",
      description:
        "DpmNFT for the one who is creating decentralized package for developers",
      image: imgUri,
      attributes: [
        {
          trait_type: "Package",
          value: v.packageName,
        },
      ],
    };
    const metaDataBlob = new Blob([JSON.stringify(metaData)]);
    const { hash, storePromise } = await asyncStore(client, metaDataBlob);
    await PackageMg.createPackage(v.packageName, "ipfs://" + hash);
    await storePromise;
  };
  return (
    <FormModal active={p.active} onBackDropClick={p.onBackDropClick}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          className="bg-white  placeholder:text-slate-900 py-4 px-2 placeholder:font-semibold text-black"
          {...register("packageName")}
          type="text"
          placeholder="Package name"
        />
        <button className="bg-slate-900 p-2 self-end mt-2">Create</button>
      </form>
    </FormModal>
  );
}
