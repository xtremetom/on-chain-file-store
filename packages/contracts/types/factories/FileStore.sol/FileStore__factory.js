"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStore__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "ChunkExists",
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
        name: "ChunkNotFound",
        type: "error",
    },
    {
        inputs: [],
        name: "ChunkTooBig",
        type: "error",
    },
    {
        inputs: [],
        name: "EmptyFile",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_size",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_start",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_end",
                type: "uint256",
            },
        ],
        name: "InvalidCodeAtRange",
        type: "error",
    },
    {
        inputs: [],
        name: "WriteError",
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
                name: "size",
                type: "uint256",
            },
        ],
        name: "NewChunk",
        type: "event",
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
                name: "size",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "contentType",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "contentEncoding",
                type: "string",
            },
        ],
        name: "NewFile",
        type: "event",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "checksums",
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
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "chunkSize",
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
                name: "",
                type: "bytes32",
            },
        ],
        name: "chunks",
        outputs: [
            {
                internalType: "address",
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
                internalType: "bytes32",
                name: "checksum",
                type: "bytes32",
            },
        ],
        name: "readChunk",
        outputs: [
            {
                internalType: "bytes",
                name: "chunk",
                type: "bytes",
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
        name: "readFileData",
        outputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
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
        name: "readFileData",
        outputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "chunk",
                type: "bytes",
            },
        ],
        name: "writeChunk",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50610ddd806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063957c28d711610066578063957c28d714610133578063a698b13014610146578063cff77f9214610187578063e8eae3cf1461019a578063f97406f7146101ad57600080fd5b80631a49cfca146100a35780631c2414d4146100cc5780633a72a9c4146100df5780634cfbb2de146100ff5780636fba0bf514610112575b600080fd5b6100b66100b13660046108d7565b6101e8565b6040516100c39190610a44565b60405180910390f35b6100b66100da366004610a57565b61026e565b6100f26100ed366004610a57565b6102d5565b6040516100c39190610a70565b6100b661010d366004610a57565b61031c565b610125610120366004610b00565b61032a565b6040519081526020016100c3565b610125610141366004610a57565b610437565b61016f610154366004610a57565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100c3565b6101256101953660046108d7565b610494565b6101256101a8366004610a57565b610584565b6101d86101bb366004610a57565b6000908152602081905260409020546001600160a01b0316151590565b60405190151581526020016100c3565b805160609061020e81604080518281016060018252910181526000602090910190815290565b915060005b8360600151518110156102675760006102488560600151838151811061023b5761023b610b51565b602002602001015161026e565b905061025484826105a5565b508061025f81610b7d565b915050610213565b5050919050565b6000818152602081905260409020546060906001600160a01b03166102ae576040516316fcd95f60e11b8152600481018390526024015b60405180910390fd5b6000828152602081905260409020546102cf906001600160a01b0316610630565b92915050565b6103006040518060800160405280600081526020016060815260200160608152602001606081525090565b6103098261026e565b8060200190518101906102cf9190610c36565b60606102cf6100b1836102d5565b6000615fff82511115610350576040516388c92e2760e01b815260040160405180910390fd5b5080516020808301919091206000818152918290526040909120546001600160a01b03161561039557604051634fd1e20760e01b8152600481018290526024016102a5565b61039e82610640565b60008281526020818152604080832080546001600160a01b0319166001600160a01b03959095169490941790935560018054808201825592527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69091018390558351915191825282917f277eb4123d86c9731f85aaee94623cc5ac9b8e1f593faa1e2bc1a3aa2d27d772910160405180910390a2919050565b6000818152602081905260408120546001600160a01b031661046f576040516316fcd95f60e11b8152600481018390526024016102a5565b6000828152602081905260409020546102cf906001906001600160a01b03163b610cf5565b600080805b8360600151518110156104ea576104cc846060015182815181106104bf576104bf610b51565b6020026020010151610437565b6104d69083610d0c565b9150806104e281610b7d565b915050610499565b508060000361050c5760405163067b6a0f60e01b815260040160405180910390fd5b80835260405161053890610524908590602001610a70565b60405160208183030381529060405261032a565b9150817f781d09314f163fac6f270ad8ff8282008540d3ce7baccdafa9dbbc1fea63eb24828560200151866040015160405161057693929190610d24565b60405180910390a250919050565b6001818154811061059457600080fd5b600091825260209091200154905081565b601f1982015182518251603f199092019182906105c29083610d0c565b11156106205760405162461bcd60e51b815260206004820152602760248201527f44796e616d69634275666665723a20417070656e64696e67206f7574206f66206044820152663137bab732399760c91b60648201526084016102a5565b61062a84846106a5565b50505050565b60606102cf8260016000196106db565b60008061066b836040516020016106579190610d59565b604051602081830303815290604052610791565b90508051602082016000f091506001600160a01b03821661069f5760405163046a55db60e11b815260040160405180910390fd5b50919050565b8051602082019150808201602084510184015b818410156106d05783518152602093840193016106b8565b505082510190915250565b6060833b60008190036106fe57505060408051602081019091526000815261078a565b8084111561071c57505060408051602081019091526000815261078a565b8383101561074e5760405163162544fd60e11b81526004810182905260248101859052604481018490526064016102a5565b83830384820360008282106107635782610765565b815b60408051603f8301601f19168101909152818152955090508087602087018a3c505050505b9392505050565b60608151826040516020016107a7929190610d7f565b6040516020818303038152906040529050919050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156107f6576107f66107bd565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610825576108256107bd565b604052919050565b600067ffffffffffffffff821115610847576108476107bd565b50601f01601f191660200190565b60006108686108638461082d565b6107fc565b905082815283838301111561087c57600080fd5b828260208301376000602084830101529392505050565b600082601f8301126108a457600080fd5b61078a83833560208501610855565b600067ffffffffffffffff8211156108cd576108cd6107bd565b5060051b60200190565b600060208083850312156108ea57600080fd5b823567ffffffffffffffff8082111561090257600080fd5b908401906080828703121561091657600080fd5b61091e6107d3565b82358152838301358281111561093357600080fd5b61093f88828601610893565b858301525060408301358281111561095657600080fd5b61096288828601610893565b60408301525060608301358281111561097a57600080fd5b80840193505086601f84011261098f57600080fd5b8235915061099f610863836108b3565b82815260059290921b830184019184810190888411156109be57600080fd5b938501935b838510156109dc578435825293850193908501906109c3565b6060830152509695505050505050565b60005b83811015610a075781810151838201526020016109ef565b8381111561062a5750506000910152565b60008151808452610a308160208601602086016109ec565b601f01601f19169290920160200192915050565b60208152600061078a6020830184610a18565b600060208284031215610a6957600080fd5b5035919050565b600060208083528351818401528084015160806040850152610a9560a0850182610a18565b90506040850151601f1980868403016060870152610ab38383610a18565b6060880151878203909201608088015281518082529185019350600092508401905b80831015610af55783518252928401926001929092019190840190610ad5565b509695505050505050565b600060208284031215610b1257600080fd5b813567ffffffffffffffff811115610b2957600080fd5b8201601f81018413610b3a57600080fd5b610b4984823560208401610855565b949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610b8f57610b8f610b67565b5060010190565b600082601f830112610ba757600080fd5b8151610bb56108638261082d565b818152846020838601011115610bca57600080fd5b610b498260208301602087016109ec565b600082601f830112610bec57600080fd5b81516020610bfc610863836108b3565b82815260059290921b84018101918181019086841115610c1b57600080fd5b8286015b84811015610af55780518352918301918301610c1f565b600060208284031215610c4857600080fd5b815167ffffffffffffffff80821115610c6057600080fd5b9083019060808286031215610c7457600080fd5b610c7c6107d3565b82518152602083015182811115610c9257600080fd5b610c9e87828601610b96565b602083015250604083015182811115610cb657600080fd5b610cc287828601610b96565b604083015250606083015182811115610cda57600080fd5b610ce687828601610bdb565b60608301525095945050505050565b600082821015610d0757610d07610b67565b500390565b60008219821115610d1f57610d1f610b67565b500190565b838152606060208201526000610d3d6060830185610a18565b8281036040840152610d4f8185610a18565b9695505050505050565b6000815260008251610d728160018501602087016109ec565b9190910160010192915050565b606360f81b815260e083901b6001600160e01b03191660018201526880600e6000396000f360b81b60058201528151600090610dc281600e8501602087016109ec565b91909101600e01939250505056fea164736f6c634300080d000a";
const isSuperArgs = (xs) => xs.length > 1;
class FileStore__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FileStore__factory = FileStore__factory;
FileStore__factory.bytecode = _bytecode;
FileStore__factory.abi = _abi;
