/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCreatedPackages
// ====================================================

export interface GetCreatedPackages_packages_releases {
  __typename: "PkgRelease";
  id: string;
  version: string;
  dataHash: string;
}

export interface GetCreatedPackages_packages {
  __typename: "Package";
  id: string;
  owner: any;
  releases: GetCreatedPackages_packages_releases[];
}

export interface GetCreatedPackages {
  packages: GetCreatedPackages_packages[];
}

export interface GetCreatedPackagesVariables {
  ownerAddr?: any | null;
}
