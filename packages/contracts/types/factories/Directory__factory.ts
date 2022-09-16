/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Directory, DirectoryInterface } from "../Directory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract FileStore",
        name: "_fileStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FileNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "FilenameExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "fileExists",
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
    inputs: [],
    name: "fileStore",
    outputs: [
      {
        internalType: "contract FileStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filenames",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    name: "files",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
    ],
    name: "readFile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contentType",
            type: "string",
          },
          {
            internalType: "string",
            name: "contentEncoding",
            type: "string",
          },
          {
            internalType: "bytes32[]",
            name: "checksums",
            type: "bytes32[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "filename",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "contentType",
            type: "string",
          },
          {
            internalType: "string",
            name: "contentEncoding",
            type: "string",
          },
          {
            internalType: "bytes32[]",
            name: "checksums",
            type: "bytes32[]",
          },
        ],
        internalType: "struct File",
        name: "file",
        type: "tuple",
      },
    ],
    name: "writeFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610b1f380380610b1f83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610a8761009860003960008181606c015281816101de01526102e50152610a876000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806321ea07e11461006757806360f9bb11146100ab5780639bccd6ad146100cb578063c9c609e0146100ee578063d0643b1114610103578063e775576114610123575b600080fd5b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100be6100b93660046105ff565b61015c565b6040516100a29190610694565b6100de6100d93660046105ff565b61025c565b60405190151581526020016100a2565b6101016100fc366004610748565b61028a565b005b610116610111366004610880565b6103cc565b6040516100a29190610899565b61014e6101313660046105ff565b805160208183018101805160008252928201919093012091525481565b6040519081526020016100a2565b6101876040518060800160405280600081526020016060815260200160608152602001606081525090565b6000808360405161019891906108ac565b908152604051908190036020019020549050806101c857604051633b4835d960e21b815260040160405180910390fd5b604051630e9caa7160e21b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690633a72a9c490602401600060405180830381865afa15801561022d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102559190810190610968565b9392505050565b60008060001b60008360405161027291906108ac565b90815260200160405180910390205414159050919050565b6000801b60008360405161029e91906108ac565b908152602001604051809103902054146102cb5760405163fc78a34d60e01b815260040160405180910390fd5b6040516367fbbfc960e11b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063cff77f929061031a908590600401610694565b6020604051808303816000875af1158015610339573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035d9190610a27565b90508060008460405161037091906108ac565b908152604051602091819003820190209190915560018054808201825560009190915284516103c6927fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf690920191860190610478565b50505050565b600181815481106103dc57600080fd5b9060005260206000200160009150905080546103f790610a40565b80601f016020809104026020016040519081016040528092919081815260200182805461042390610a40565b80156104705780601f1061044557610100808354040283529160200191610470565b820191906000526020600020905b81548152906001019060200180831161045357829003601f168201915b505050505081565b82805461048490610a40565b90600052602060002090601f0160209004810192826104a657600085556104ec565b82601f106104bf57805160ff19168380011785556104ec565b828001600101855582156104ec579182015b828111156104ec5782518255916020019190600101906104d1565b506104f89291506104fc565b5090565b5b808211156104f857600081556001016104fd565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561054a5761054a610511565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561057957610579610511565b604052919050565b600067ffffffffffffffff82111561059b5761059b610511565b50601f01601f191660200190565b600082601f8301126105ba57600080fd5b81356105cd6105c882610581565b610550565b8181528460208386010111156105e257600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561061157600080fd5b813567ffffffffffffffff81111561062857600080fd5b610634848285016105a9565b949350505050565b60005b8381101561065757818101518382015260200161063f565b838111156103c65750506000910152565b6000815180845261068081602086016020860161063c565b601f01601f19169290920160200192915050565b6000602080835283518184015280840151608060408501526106b960a0850182610668565b90506040850151601f19808684030160608701526106d78383610668565b6060880151878203909201608088015281518082529185019350600092508401905b8083101561071957835182529284019260019290920191908401906106f9565b509695505050505050565b600067ffffffffffffffff82111561073e5761073e610511565b5060051b60200190565b6000806040838503121561075b57600080fd5b823567ffffffffffffffff8082111561077357600080fd5b61077f868387016105a9565b935060209150818501358181111561079657600080fd5b8501608081880312156107a857600080fd5b6107b0610527565b8135815283820135838111156107c557600080fd5b6107d1898285016105a9565b85830152506040820135838111156107e857600080fd5b6107f4898285016105a9565b60408301525060608201358381111561080c57600080fd5b82019250601f8301881361081f57600080fd5b8235915061082f6105c883610724565b82815260059290921b8301840191848101908984111561084e57600080fd5b938501935b8385101561086c57843582529385019390850190610853565b606083015250949794965093945050505050565b60006020828403121561089257600080fd5b5035919050565b6020815260006102556020830184610668565b600082516108be81846020870161063c565b9190910192915050565b600082601f8301126108d957600080fd5b81516108e76105c882610581565b8181528460208386010111156108fc57600080fd5b61063482602083016020870161063c565b600082601f83011261091e57600080fd5b8151602061092e6105c883610724565b82815260059290921b8401810191818101908684111561094d57600080fd5b8286015b848110156107195780518352918301918301610951565b60006020828403121561097a57600080fd5b815167ffffffffffffffff8082111561099257600080fd5b90830190608082860312156109a657600080fd5b6109ae610527565b825181526020830151828111156109c457600080fd5b6109d0878286016108c8565b6020830152506040830151828111156109e857600080fd5b6109f4878286016108c8565b604083015250606083015182811115610a0c57600080fd5b610a188782860161090d565b60608301525095945050505050565b600060208284031215610a3957600080fd5b5051919050565b600181811c90821680610a5457607f821691505b602082108103610a7457634e487b7160e01b600052602260045260246000fd5b5091905056fea164736f6c634300080d000a";

type DirectoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DirectoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Directory__factory extends ContractFactory {
  constructor(...args: DirectoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _fileStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Directory> {
    return super.deploy(_fileStore, overrides || {}) as Promise<Directory>;
  }
  override getDeployTransaction(
    _fileStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_fileStore, overrides || {});
  }
  override attach(address: string): Directory {
    return super.attach(address) as Directory;
  }
  override connect(signer: Signer): Directory__factory {
    return super.connect(signer) as Directory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DirectoryInterface {
    return new utils.Interface(_abi) as DirectoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Directory {
    return new Contract(address, _abi, signerOrProvider) as Directory;
  }
}