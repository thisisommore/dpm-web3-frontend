import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import FormModal from "../../src/components/Modal";
import { WalletContext } from "../../src/contexts/WalletContext";
import { PackageMg__factory } from "../../src/contracts";
import { PackageMgAddr } from "../../src/env";
import { GET_CREATED_PACKAGES } from "../../src/graph-ql/queries/GET_CREATED_PACKAGES/getCreatedPackages";
import { GetCreatedPackages } from "../../src/graph-ql/queries/GET_CREATED_PACKAGES/__generated__/GetCreatedPackages";
import { NFTStorage } from "nft.storage";

//TODO: better logic for passing this, maybe some context
type Props = {
  active: boolean;
  onBackDropClick?: () => void;
};
type FormValues = {
  packageName: string;
  versionName: string;
  dataFile: FileList;
  isDefault: boolean;
};
export default function ReleaseModal(p: Props) {
  // create client instance for nft.storage
  const client = new NFTStorage({
    token: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN ?? "",
  });
  const walletContext = useContext(WalletContext);
  const { loading, data, error } = useQuery<GetCreatedPackages>(
    GET_CREATED_PACKAGES,
    {
      variables: {
        ownerAddr: walletContext.walletAddress,
      },
    }
  );
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = async (v: FormValues) => {
    const provider = await walletContext.getWeb3Provider();
    const signer = provider.getSigner();
    const PackageMg = PackageMg__factory.connect(PackageMgAddr, signer);

    const dataFile = v.dataFile.item(0);
    if (!dataFile) {
      alert("Cannot get file, try again later");
      return;
    }
    let cid = await client.storeBlob(dataFile);
    await PackageMg.releaseNewVersion(
      v.packageName,
      v.versionName,
      cid,
      v.isDefault
    );
  };
  return (
    <FormModal active={p.active} onBackDropClick={p.onBackDropClick}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <select defaultValue={""} {...register("packageName")}>
          <option value="" disabled hidden>
            Select package
          </option>
          {data?.packages.map((p) => (
            <option value={p.id} key={p.id}>
              {p.id}
            </option>
          ))}
        </select>
        <input
          className="bg-white  placeholder:text-slate-900 py-4 px-2 placeholder:font-semibold text-black mt-3"
          {...register("versionName")}
          type="text"
          placeholder="Version name"
        />
        <input type="file" {...register("dataFile")} accept=".zip" />
        <div>
          <label htmlFor="isDefault">Mark as latest stable</label>
          <input
            type="checkbox"
            className="ml-2"
            id="isDefault"
            {...register("isDefault")}
          />
        </div>

        <button className="bg-slate-900 p-2 self-end mt-2">Create</button>
      </form>
    </FormModal>
  );
}
