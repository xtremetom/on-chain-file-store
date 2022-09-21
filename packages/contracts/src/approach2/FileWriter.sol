// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import {SSTORE2} from "sstore2/SSTORE2.sol";
import {Bytecode} from "sstore2/utils/Bytecode.sol";
import {DynamicBuffer} from "ethier/contracts/utils/DynamicBuffer.sol";
import {ContentStore, ContentStoreRegistry} from "./ContentStoreRegistry.sol";
import {File} from "./File.sol";

library FileWriter {
    error EmptyFile();

    event NewFile(
        bytes32 indexed checksum,
        uint256 size,
        string contentType,
        string contentEncoding
    );

    function writeFile(
        string memory contentType,
        string memory contentEncoding,
        bytes32[] memory checksums
    ) public returns (bytes32 checksum, File memory file) {
        ContentStore contentStore = ContentStoreRegistry.getStore();
        uint256 size = 0;
        // TODO: optimize this
        for (uint256 i = 0; i < checksums.length; i++) {
            size += contentStore.contentLength(checksums[i]);
        }
        if (size == 0) {
            revert EmptyFile();
        }
        file = File({
            size: size,
            contentType: contentType,
            contentEncoding: contentEncoding,
            checksums: checksums
        });
        checksum = contentStore.addContent(abi.encode(file));
        emit NewFile(
            checksum,
            file.size,
            file.contentType,
            file.contentEncoding
        );
        return (checksum, file);
    }
}