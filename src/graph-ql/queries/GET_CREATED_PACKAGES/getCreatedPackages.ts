import { gql } from "@apollo/client";

export const GET_CREATED_PACKAGES = gql`
  query GetCreatedPackages($ownerAddr:Bytes) {
    packages(where:{owner:$ownerAddr}) {
    id
    owner
    releases {
      id
      version
      dataHash
    }
  }
}`