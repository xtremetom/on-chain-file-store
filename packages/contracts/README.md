# TODO

- catch revert from abi.decode and revert with a better error
- ~~check read gas if we store Files with (checksum, pointer)[] instead of checksum[] to avoid read time store look ups~~
- ~~use interfaces to reduce downstream imports~~

- ~~try SSTORE2Map for gas, but may not let us prepopulate the map~~
  ~10k gas cheaper read/write when used on file wrappers, prob not worth it in chunk store

- ~~try deploying file reader/wrapper as a contract with all the info inside it that is needed to read out files~~
  not much cheaper file reads (~10k gas) and much more expensive writes (~200k gas)
  ultimately, the cheapest gas-wise is to inline all the buffer appending and never pass large bytes through function calls

- ~~decide if getters (contentLength, getPointer) should revert or return 0~~
  revert, since mapping getters are already available
- ~~check read gas on rebuilding files within library instead of store contract~~
  it is cheaper (store contract sends checksums/pointers instead of bytes)