import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormModal from "../../src/components/Modal";
import { WalletContext } from "../../src/contexts/WalletContext";
import { PackageMg__factory } from "../../src/contracts";
import { PackageMgAddr } from "../../src/env";

type FormValues = {
  packageName: string;
};
export default function MintModal() {
  const { register, handleSubmit } = useForm<FormValues>();
  const walletContext = useContext(WalletContext);
  const onSubmit = async (v: FormValues) => {
    const provider = await walletContext.getWeb3Provider();
    const signer = provider.getSigner();
    const PackageMg = PackageMg__factory.connect(PackageMgAddr, signer);
    await PackageMg.createPackage(v.packageName);
  };
  return (
    <FormModal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("packageName")}
          type="text"
          placeholder="Package name"
        />
        <button>Create</button>
      </form>
    </FormModal>
  );
}
