import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { WalletContext } from "../../src/contexts/WalletContext";
import { GET_CREATED_PACKAGES } from "../../src/graph-ql/queries/GET_CREATED_PACKAGES/getCreatedPackages";
import { GetCreatedPackages } from "../../src/graph-ql/queries/GET_CREATED_PACKAGES/__generated__/GetCreatedPackages";

const Dashboard = () => {
  const walletContext = useContext(WalletContext);
  const { loading, data, error } = useQuery<GetCreatedPackages>(
    GET_CREATED_PACKAGES,
    {
      variables: {
        ownerAddr: walletContext.walletAddress,
      },
    }
  );
  return (
    <div>
      Dashboard
      {data?.packages.map((pkg) => (
        <p key={pkg.id}>{pkg.id}</p>
      ))}
    </div>
  );
};
export default Dashboard;
