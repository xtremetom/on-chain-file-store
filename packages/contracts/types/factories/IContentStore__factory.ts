/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IContentStore, IContentStoreInterface } from "../IContentStore";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "ChecksumExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "ChecksumNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "ContentTooBig",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "contentSize",
        type: "uint256",
      },
    ],
    name: "NewChecksum",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "content",
        type: "bytes",
      },
    ],
    name: "addContent",
    outputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "pointer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pointer",
        type: "address",
      },
    ],
    name: "addPointer",
    outputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "checksumExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "contentLength",
    outputs: [
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "checksum",
        type: "bytes32",
      },
    ],
    name: "getPointer",
    outputs: [
      {
        internalType: "address",
        name: "pointer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IContentStore__factory {
  static readonly abi = _abi;
  static createInterface(): IContentStoreInterface {
    return new utils.Interface(_abi) as IContentStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IContentStore {
    return new Contract(address, _abi, signerOrProvider) as IContentStore;
  }
}