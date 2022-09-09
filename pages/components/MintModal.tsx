import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormModal from "../../src/components/Modal";
import { WalletContext } from "../../src/contexts/WalletContext";
import { PackageMg__factory } from "../../src/contracts";
import { PackageMgAddr } from "../../src/env";

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
    await PackageMg.createPackage(v.packageName);
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
