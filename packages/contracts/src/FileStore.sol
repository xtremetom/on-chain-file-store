// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "sstore2/SSTORE2.sol";
import "sstore2/utils/Bytecode.sol";

// TODO: test gas on file wrapper with one chunk (two sstore2 calls) vs. file wrapper with data

// enum FileStorageType {
//     Bytes,
//     Chunks
// }

// struct File {
//     FileStorageType storageType;
//     string mimeType;
//     string contentEncoding;
//     bytes data;
// }

// if (file.storageType === FileStorageType.Bytes) {
//     return file.data;
// } else {
//     bytes32[] memory checksums = abi.decode(file.data, (bytes32[]));
//     // read
// }

struct File {
    uint256 size; // automatically calculated on write
    string contentType; // e.g. image/png, text/javascript
    string contentEncoding; // optional, e.g. gzip, fflate
    bytes32[] checksums;
}

contract FileStore {
    // bytes checksum => sstore2 pointer
    mapping(bytes32 => address) public chunks;
    bytes32[] public checksums;

    error ChunkTooBig();
    error ChecksumNotFound();
    error EmptyFile();

    function checksumExists(bytes32 checksum) public view returns (bool) {
        return chunks[checksum] != address(0);
    }

    function chunkSize(bytes32 checksum) public view returns (uint256 size) {
        if (!checksumExists(checksum)) {
            revert ChecksumNotFound();
        }
        return Bytecode.codeSize(chunks[checksum]) - 1;
    }

    function writeChunk(bytes memory chunk) public returns (bytes32 checksum) {
        if (chunk.length > 24575) {
            revert ChunkTooBig();
        }
        checksum = keccak256(chunk);
        // TODO: revert if exists
        if (chunks[checksum] == address(0)) {
            chunks[checksum] = SSTORE2.write(chunk);
            checksums.push(checksum);
        }
        return checksum;
    }

    function writeFile(File memory file) public returns (bytes32 checksum) {
        uint256 size = 0;
        // TODO: optimize this
        for (uint256 i = 0; i < file.checksums.length; i++) {
            size += chunkSize(file.checksums[i]);
        }
        if (size == 0) {
            revert EmptyFile();
        }
        file.size = size;
        return writeChunk(abi.encode(file));
    }

    function readChunk(bytes32 checksum)
        public
        view
        returns (bytes memory chunk)
    {
        if (!checksumExists(checksum)) {
            revert ChecksumNotFound();
        }
        return SSTORE2.read(chunks[checksum]);
    }

    function readFile(bytes32 checksum) public view returns (File memory file) {
        if (!checksumExists(checksum)) {
            revert ChecksumNotFound();
        }
        return abi.decode(readChunk(checksum), (File));
    }

    function readFileData(bytes32 checksum)
        public
        view
        returns (bytes memory data)
    {
        return readFileData(readFile(checksum));
    }

    function readFileData(File memory file)
        public
        view
        returns (bytes memory data)
    {
        // TODO: test gas using DynamicBuffer
        uint256 size = file.size;
        data = new bytes(size);
        uint256 offset = 0;
        for (uint256 i = 0; i < file.checksums.length; i++) {
            bytes memory chunk = readChunk(file.checksums[i]);
            uint256 chunkLength = chunk.length;
            for (uint256 j = 0; j < chunkLength; j++) {
                data[offset + j] = chunk[j];
            }
            offset += chunkLength;
        }
        return data;
    }
}