/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type FileStruct = {
  size: PromiseOrValue<BigNumberish>;
  contentType: PromiseOrValue<string>;
  contentEncoding: PromiseOrValue<string>;
  checksums: PromiseOrValue<BytesLike>[];
};

export type FileStructOutput = [BigNumber, string, string, string[]] & {
  size: BigNumber;
  contentType: string;
  contentEncoding: string;
  checksums: string[];
};

export interface FileStoreInterface extends utils.Interface {
  functions: {
    "checksumExists(bytes32)": FunctionFragment;
    "checksums(uint256)": FunctionFragment;
    "chunkSize(bytes32)": FunctionFragment;
    "chunks(bytes32)": FunctionFragment;
    "readChunk(bytes32)": FunctionFragment;
    "readFile(bytes32)": FunctionFragment;
    "readFileData((uint256,string,string,bytes32[]))": FunctionFragment;
    "readFileData(bytes32)": FunctionFragment;
    "writeChunk(bytes)": FunctionFragment;
    "writeFile((uint256,string,string,bytes32[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "checksumExists"
      | "checksums"
      | "chunkSize"
      | "chunks"
      | "readChunk"
      | "readFile"
      | "readFileData((uint256,string,string,bytes32[]))"
      | "readFileData(bytes32)"
      | "writeChunk"
      | "writeFile"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checksumExists",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "checksums",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "chunkSize",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "chunks",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "readChunk",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "readFile",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "readFileData((uint256,string,string,bytes32[]))",
    values: [FileStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "readFileData(bytes32)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "writeChunk",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "writeFile",
    values: [FileStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "checksumExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checksums", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chunkSize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chunks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readChunk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readFileData((uint256,string,string,bytes32[]))",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readFileData(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "writeChunk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "writeFile", data: BytesLike): Result;

  events: {
    "NewChunk(bytes32,uint256)": EventFragment;
    "NewFile(bytes32,uint256,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewChunk"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewFile"): EventFragment;
}

export interface NewChunkEventObject {
  checksum: string;
  size: BigNumber;
}
export type NewChunkEvent = TypedEvent<
  [string, BigNumber],
  NewChunkEventObject
>;

export type NewChunkEventFilter = TypedEventFilter<NewChunkEvent>;

export interface NewFileEventObject {
  checksum: string;
  size: BigNumber;
  contentType: string;
  contentEncoding: string;
}
export type NewFileEvent = TypedEvent<
  [string, BigNumber, string, string],
  NewFileEventObject
>;

export type NewFileEventFilter = TypedEventFilter<NewFileEvent>;

export interface FileStore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FileStoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    checksumExists(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    checksums(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    chunkSize(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { size: BigNumber }>;

    chunks(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    readChunk(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { chunk: string }>;

    readFile(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[FileStructOutput] & { file: FileStructOutput }>;

    "readFileData((uint256,string,string,bytes32[]))"(
      file: FileStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    "readFileData(bytes32)"(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string] & { data: string }>;

    writeChunk(
      chunk: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    writeFile(
      file: FileStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  checksumExists(
    checksum: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  checksums(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  chunkSize(
    checksum: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  chunks(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  readChunk(
    checksum: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  readFile(
    checksum: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<FileStructOutput>;

  "readFileData((uint256,string,string,bytes32[]))"(
    file: FileStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  "readFileData(bytes32)"(
    checksum: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  writeChunk(
    chunk: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  writeFile(
    file: FileStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    checksumExists(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    checksums(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    chunkSize(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chunks(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    readChunk(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    readFile(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<FileStructOutput>;

    "readFileData((uint256,string,string,bytes32[]))"(
      file: FileStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    "readFileData(bytes32)"(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    writeChunk(
      chunk: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    writeFile(file: FileStruct, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewChunk(bytes32,uint256)"(
      checksum?: PromiseOrValue<BytesLike> | null,
      size?: null
    ): NewChunkEventFilter;
    NewChunk(
      checksum?: PromiseOrValue<BytesLike> | null,
      size?: null
    ): NewChunkEventFilter;

    "NewFile(bytes32,uint256,string,string)"(
      checksum?: PromiseOrValue<BytesLike> | null,
      size?: null,
      contentType?: null,
      contentEncoding?: null
    ): NewFileEventFilter;
    NewFile(
      checksum?: PromiseOrValue<BytesLike> | null,
      size?: null,
      contentType?: null,
      contentEncoding?: null
    ): NewFileEventFilter;
  };

  estimateGas: {
    checksumExists(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checksums(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chunkSize(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chunks(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readChunk(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readFile(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readFileData((uint256,string,string,bytes32[]))"(
      file: FileStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readFileData(bytes32)"(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    writeChunk(
      chunk: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    writeFile(
      file: FileStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checksumExists(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checksums(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chunkSize(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chunks(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readChunk(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readFile(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readFileData((uint256,string,string,bytes32[]))"(
      file: FileStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readFileData(bytes32)"(
      checksum: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    writeChunk(
      chunk: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    writeFile(
      file: FileStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}