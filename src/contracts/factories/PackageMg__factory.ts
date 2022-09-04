/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { PackageMg, PackageMgInterface } from "../PackageMg";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "pkgName",
        type: "string",
      },
    ],
    name: "PackageCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "pkgName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "versionName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataHash",
        type: "string",
      },
    ],
    name: "PackageVersionCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "packageName",
        type: "string",
      },
    ],
    name: "createPackage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "nameToPackage",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "packageName",
        type: "string",
      },
      {
        internalType: "string",
        name: "versionName",
        type: "string",
      },
      {
        internalType: "string",
        name: "dataHash",
        type: "string",
      },
    ],
    name: "releaseNewVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class PackageMg__factory {
  static readonly abi = _abi;
  static createInterface(): PackageMgInterface {
    return new utils.Interface(_abi) as PackageMgInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PackageMg {
    return new Contract(address, _abi, signerOrProvider) as PackageMg;
  }
}